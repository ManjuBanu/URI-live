import { combineReducers }from 'redux';
import cartReducer from './cart/red-cart';
import userReducer from './user/red-user';
import shopReducer from './shop/red-shop';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import directoryReducer from './directory/red-directory';


const persistConfig ={
    key:'root',
    storage,
    whiteList :['cart']
}

 const rootReducer = combineReducers({
    user:userReducer,
    cart :cartReducer,
    directory:directoryReducer,
    shop : shopReducer,
});

export default persistReducer(persistConfig,rootReducer)

