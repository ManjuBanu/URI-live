import React,{useEffect} from 'react';
import { Route,Switch, Redirect} from 'react-router-dom';
import Home from './pages/home/home';
import ShopPage from './pages/shop/shop-page';
import Header from './components/header/header';
import SignInSignUp from './pages/sign-in-up/sing-in-up';
import {connect} from 'react-redux';
import {selectCurrentUser} from './redux/user/selector-user';
import {createStructuredSelector} from 'reselect';
import CheckoutPage from './pages/checkout/checkout-page';
import { checkUserSession } from './redux/user/act-user';
import {GlobalStyle} from './global.style';

/** class component coverted to functional component....for the class component ref u can check shop-page means the [componentDidMount] */


const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);


// unSubscribeFromAuth = null;


// componentDidMount() {
//     const { checkUserSession } = this.props;
//     checkUserSession();
    
  

    
//     //it exectutes whenever the auth chenging 

//     /** this is useing observable concept .....conAuthState changed is a strem , observable handling those things,,, */
//     this.unSubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
// // (unSubscribeFromAuth) using bcz auth will alaways hold values, we don't want after component UNMOUNT 
//       if(userAuth){
//         const userRef = await createUserProfileDocument(userAuth);

//         userRef.onSnapshot(snapShot => {
//           // set the current user to redux
//           setCurrentUser({
//             id:snapShot.id,
//             ...snapShot.data()
//          })
//         });
     
//       }
//       setCurrentUser(userAuth)
//       /** removing this line bcz we added collection to firebase...no need to every time manually */

//       // **** we have to be very carefull... bcz whenever the pages refresh it add collections.....so  once the collections added in to firebase remove the code which u have written for adding collections  ****

//       // addCollectionAndDocuments('collection2',collectionArray.map(({title, items}) =>({title, items})))
//       // addCollectionAndDocuments('collections',collectionArray.map(({title, items}) =>({title, items})))

//     }, error =>{console.log(error)}); // u can handle error which is the second method of observable..



// componentWillUnmount(){
//   this.unSubscribeFromAuth(); // we don't need auth anymore
// }

    return (
      <div>
      <GlobalStyle/>
      <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/Shop' component={ShopPage}/>
          <Route exact path ='/checkout' component={CheckoutPage}/>
          <Route 
          exact 
          path='/signin' 
          render={()=> currentUser ?
          (<Redirect to='/'/>)
          :
          (<SignInSignUp/>)
          }
          />
        </Switch>
      </div>
    );

  }

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionArray: selectCollectionsForPreview,  //......bcz we added collections to firebase programattically
})

// const mapDispatchToProps = dispatch =>({
//   setCurrentUser:user=> dispatch(setCurrentUser(user))
// })

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect (mapStateToProps, mapDispatchToProps)(App);


