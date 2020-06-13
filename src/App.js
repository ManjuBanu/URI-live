import React from 'react';
import './App.css';
import { Route,Switch} from 'react-router-dom';
import {Home} from './pages/home/home';
import {ShopPage} from './pages/shop/shop-page';
import Header from './components/header/header';
import SignInSignUp from './pages/sign-in-up/sing-in-up';
import {auth, createUserProfileDocument} from './firebase/firebase-util';
import {setCurrentUser} from './redux/user/act-user';
import {connect} from 'react-redux';


class App extends React.Component {


unSubscribeFromAuth = null;

  componentDidMount(){

    const {setCurrentUser} = this.props;
    this.unSubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
         })
        });
     
      }
      setCurrentUser(userAuth)

    });
}

componentWillUnmount(){
  this.unSubscribeFromAuth();
}

  render(){
    return (
      <div>
      <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/Shop' component={ShopPage}/>
          <Route path='/signin' component={SignInSignUp}/>
        </Switch>
      </div>
    );

  }
}


const mapDispatchToProps = dispatch =>({
  setCurrentUser:user=> dispatch(setCurrentUser(user))
})

export default connect (null, mapDispatchToProps)(App);


