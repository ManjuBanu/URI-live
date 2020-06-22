
import UserActionTypes from './type-user';

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const signInSuccess = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});

export const emailSignInStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error
});


export const signUpStart = userCredentials => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData }
});

export const signUpFailure = error => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error
});



// import UserActionTypes from './type-user';

// export const setCurrentUser = user =>({
//     type:UserActionTypes.SET_CURRENT_USER,
//     payload:user,
// });


// export const googleSignInRequest = () => ({
//     type: UserActionTypes.GOOGLE_SIGN_IN_REQUEST
//   });
  
//   export const googlesignInSuccess = user => ({
//     type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
//     payload: user
//   });
  
//   export const googlesignInFailure = error => ({
//     type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
//     payload: error
//   });

//   export const emailSignInRequest = emailAndPassword => ({
//     type: userActionTypes.EMAIL_SIGN_IN_REQUEST,
//     payload:emailAndPassword
//   });
  
//   export const emailSignInSuccess = user => ({
//     type: userActionTypes.EMAIL_SIGN_IN_SUCCESS,
//     payload: user
//   });
  
//   export const emailSignInFailure = error => ({
//     type: userActionTypes.EMAIL_SIGN_IN_FAILURE,
//     payload: error
//   });
  
// //   export const emailSignInStart = emailAndPassword => ({
// //     type: userActionTypes.EMAIL_SIGN_IN_START,
// //     payload: emailAndPassword
// //   });
  
// //   export const checkUserSession = () => ({
// //     type: userActionTypes.CHECK_USER_SESSION
// //   });
  
// //   export const signOutStart = () => ({
// //     type: userActionTypes.SIGN_OUT_START
// //   });
  
// //   export const signOutSuccess = () => ({
// //     type: userActionTypes.SIGN_OUT_SUCCESS
// //   });
  
// //   export const signOutFailure = error => ({
// //     type: userActionTypes.SIGN_OUT_FAILURE,
// //     payload: error
// //   });

