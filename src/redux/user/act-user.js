import {userActionTypes} from './type-user';

export const setCurrentUser = user =>({
    type:userActionTypes.SET_CURRENT_USER,
    payload:user,
})