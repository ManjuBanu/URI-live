import React from 'react';
import './App.css';
import {Home} from './pages/home/home';
import { Route } from 'react-router-dom';
import {ShopPage} from './pages/shop/shop-page';





function App() {
  return (
    <div>
    <Route exact path='/' component={Home}/>
    <Route path='/ShopPage' component={ShopPage}/>
    </div>
  );
}

export default App;
