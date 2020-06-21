import userActionTypes from './type-user';
 import {takeLatest,all,call , put} from 'redux-saga/effects';
import {auth , googleProvider,  createUserProfileDocument} from './../../firebase/firebase-util';
import {googlesignInSuccess,googlesignInFailure} from './act-user';


export function* signInWithGoogle(){
try{
    const {user} = yield auth.signInWithPopup(googleProvider);
    const userRef =yield call(createUserProfileDocument, user)
    const userSnapshot = yield userRef.get();

    yield put(googlesignInSuccess({id: userSnapshot.id , ...userSnapshot.data()}));

}catch(error){
   yield put(googlesignInFailure(error));
}
}


 export function*  onGoogleSignReques(){
     yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_REQUEST,signInWithGoogle)
 }

 export function* userSagas(){
     yield all([call(onGoogleSignReques)]);
 }