import UserActionTypes from './type-user';

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
      case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;




// import userActionTypes from './type-user';

// const INITIAL_STATE = {
//     currentUser : null,
//     error:null
// }

// const userReducer = (state = INITIAL_STATE , action) =>{
//     switch(action.type){
//         case userActionTypes.GOOGLE_SIGN_IN_SUCCESS:
//         case userActionTypes.EMAIL_SIGN_IN_SUCCESS:
//             return{
//                 ...state,
//                 currentUser:action.payload,
//                 error:null
//             }

//         case userActionTypes.GOOGLE_SIGN_IN_FAILURE:
//         case userActionTypes.EMAIL_SIGN_IN_FAILURE:
//             return{
//                 ...state,
//                 error:action.payload
//             }
//         default:
//             return state;
//     }
// }

// export  default userReducer;