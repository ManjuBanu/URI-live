import React from 'react';
import './App.css';
import {Home} from './pages/home/home';
import { Route } from 'react-router-dom';


const Hats = (props) =>{
  console.log('props',props);
  return(
  <div>
  <h1>WE ARE IN HATS PAGE !!</h1>
  </div>
);
};


function App() {
  return (
    <div>
    <Route exact path='/' component={Home}/>
    <Route path='/hats' component={Hats}/>
    </div>
  );
}

export default App;
