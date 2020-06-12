import React from 'react';
import './App.css';
import { Route,Switch} from 'react-router-dom';
import {Home} from './pages/home/home';
import {ShopPage} from './pages/shop/shop-page';
import Header from './components/header/header';
import SignInSignUp from './pages/sign-in-up/sing-in-up';
import {auth, createUserProfileDocument} from './firebase/firebase-util';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }


unSubscribeFromAuth = null;

  componentDidMount(){
    this.unSubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
     
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
         this.setState({
          currentUser:{
            id:snapShot.id,
            ...snapShot.data()
          }
         })
        });
        console.log('dsfgdf',this.state);
      }
      this.setState({currentUser:userAuth})

    });
}

componentWillUnmount(){
  this.unSubscribeFromAuth();
}

  render(){
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/Shop' component={ShopPage}/>
          <Route path='/signin' component={SignInSignUp}/>
        </Switch>
      </div>
    );

  }
}

export default App;


