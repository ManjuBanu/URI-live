import { createStore, applyMiddleware } from "redux";
import combineReducers from './root-reducer';
import {logger} from 'redux-logger';
import {persistStore} from 'redux-persist';
// import thunk from 'redux-thunk';
import createSagaMiddleware from  'redux-saga';
import rootSaga from './root-sagas';


/** middleware does get the action before it reach  reducer ..it can do something and [pass] the [action] to [reducer]....
 * it may not pass to red
 * 
 * it have 3 basic lib 
 * 1) [redux-logger] ==> log the reducer states and show in console.log
 * 2) [thunk]        ==> allows (action as function) , then invoke the function
 * 3) [sagas]        ==> it is a (funtion) that conditionally runs ....mulitiple sagas listen mulitiple actionr same action at a time 
 *                          ..Reducers fire first, then sagas receive the action. From there, sagas can fire off new
 *                           actions which in turn hit the reducers and other sagas as well!
 * 
 */



// const middleware = [thunk];

const sagaMiddleware = createSagaMiddleware(); //returns obj 
const middleware =[sagaMiddleware];



if(process.env.NODE_ENV === 'development'){
    middleware.push(logger);
}

export const store = createStore(combineReducers , applyMiddleware(...middleware));


sagaMiddleware.run(rootSaga); 

export const persistor = persistStore(store);

export default { store, persistStore };


