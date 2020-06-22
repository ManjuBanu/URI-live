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

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth , additionalData)=>{
    if(!userAuth) return;
    const userRef =firestore.doc(`users/${userAuth.uid}`); //it will get the user doc of who is trying to login


    /* collectionSnapshot u can check in console */

    // const CollectionRef = firestore.collection('users');
    // const CollectionSnap = await CollectionRef.get();
    // console.log('CollectionSnap',CollectionSnap)
    // console.log({collectins: CollectionSnap.docs.map(doc => doc.data())})

    const snapShot = await userRef.get();

    // snapshot will check weather the user exist r nt 

    /* even if the firestore doesn't have the data it will returns stanpshot
    *u can check passing random id 'jdhbkeudsjbf243jhbds' in firestore.doc(`users/jdhbkeudsjbf243jhbds`)...u will get snapshot
     */

    if(!snapShot.exists){
        const {displayName , email } = userAuth;
        const createdAt = new Date();

        try{

            // to create manual data 
            // await userRef.set({     
            //     displayName:'manual',
            //     email:manual@gmail.com,
            //     createdAt,
            //     ...additionalData
            // })
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



/** whenever u want to add new collections to firebase... */
export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
  ) => {
    const collectionRef = firestore.collection(collectionKey);
  
     //for batch of query 
    const batch = firestore.batch();
    //forEach() will not return new array like map
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
       //insted of newDocRef.set()  u can use batch batch.set()
      batch.set(newDocRef, obj);
    });
   /* it will fire our batch reg... returns promise if suceed return no value  */
    return await batch.commit();
  };
  


/** bcz we r converting to obj instead of array */
  export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
      const { title, items } = doc.data();
  
      //encodeURI helps to read the all char includes special char
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      };
    });
  
    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {});
  };

  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
      }, reject);
    });
  };


export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;

