import React from 'react';
import './App.css';
import { Route,Switch, Redirect} from 'react-router-dom';
import {Home} from './pages/home/home';
import ShopPage from './pages/shop/shop-page';
import Header from './components/header/header';
import SignInSignUp from './pages/sign-in-up/sing-in-up';
import {auth, createUserProfileDocument} from './firebase/firebase-util'; //{addCollectionAndDocuments}
import {setCurrentUser} from './redux/user/act-user';
import {connect} from 'react-redux';
import {selectCurrentUser} from './redux/user/selector-user';
import {createStructuredSelector} from 'reselect';
import CheckoutPage from './pages/checkout/checkout-page';
// import {selectCollectionsForPreview} from './redux/shop/selector-shop';

class App extends React.Component {


unSubscribeFromAuth = null;

  componentDidMount(){

    const {setCurrentUser} = this.props;
    //it exectutes whenever the auth chenging 
    this.unSubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          // set the current user to redux
          setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
         })
        });
     
      }
      setCurrentUser(userAuth)
      /** removing this line bcz we added collection to firebase...no need to every time manually */

      // **** we have to be very carefull... bcz whenever the pages refresh it add collections.....so  once the collections added in to firebase remove the code which u have written for adding collections  ****

      // addCollectionAndDocuments('collection2',collectionArray.map(({title, items}) =>({title, items})))
      // addCollectionAndDocuments('collections',collectionArray.map(({title, items}) =>({title, items})))

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
          <Route path ='/checkout' component={CheckoutPage}></Route>
          <Route 
          exact 
          path='/signin' 
          render={()=> this.props.currentUser ?
          (<Redirect to='/'/>)
          :
          (<SignInSignUp/>)
          }
          />
        </Switch>
      </div>
    );

  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionArray: selectCollectionsForPreview,  //......bcz we added collections to firebase programattically
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser:user=> dispatch(setCurrentUser(user))
})

export default connect (mapStateToProps, mapDispatchToProps)(App);


