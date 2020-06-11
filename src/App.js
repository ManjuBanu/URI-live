import React from 'react';
import './App.css';
import { Route,Switch} from 'react-router-dom';
import {Home} from './pages/home/home';
import {ShopPage} from './pages/shop/shop-page';
import Header from './components/header/header';
import SignInSignUp from './pages/sign-in-up/sing-in-up';



function App() {
  return (
    <div>
    <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/Shop' component={ShopPage}/>
        <Route path='/signin' component={SignInSignUp}/>>
      </Switch>
    </div>
  );
}

export default App;
