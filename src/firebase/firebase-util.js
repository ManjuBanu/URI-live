import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAMboB-CVZGsNK4yw_gMJ5j-aq-Tt_sqKo",
    authDomain: "ecomm-db-ad897.firebaseapp.com",
    databaseURL: "https://ecomm-db-ad897.firebaseio.com",
    projectId: "ecomm-db-ad897",
    storageBucket: "ecomm-db-ad897.appspot.com",
    messagingSenderId: "521793522315",
    appId: "1:521793522315:web:1724ea76c0381874cae28e",
    measurementId: "G-4JPFZMGWH9"
}



export const createUserProfileDocument = async (userAuth , additionalData)=>{
    if(!userAuth) return;
    const userRef =firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName , email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user',error.message);
        }
    }
    return userRef;

};



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

