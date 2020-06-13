import { combineReducers }from 'redux';

import userReducer from './user/red-user';

export default combineReducers({
    user:userReducer
});