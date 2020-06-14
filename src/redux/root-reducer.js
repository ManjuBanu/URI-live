import { combineReducers }from 'redux';
import cartReducer from './cart/red-cart';
import userReducer from './user/red-user';

export default combineReducers({
    user:userReducer,
    cart :cartReducer,
});