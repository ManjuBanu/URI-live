/** all thunk are act created return function that dispatched */

/** if thunk-midleware is enabled anytime u attempt to dispatch a function  instead of an obje .....
 * the middleware will call that function with  dispatch method itself as the first argu
 */

import ShopActionTypes from './types-shop';
import {firestore,convertCollectionsSnapshotToMap} from './../../firebase/firebase-util';

/** returns [object] */
// export const updateCollections = collectionsMap => ({
//   type: ShopActionTypes.UPDATE_COLLECTIONS,
//   payload: collectionsMap
// });


// returns [obj]
export const fetchCollectionsRequest = () =>({
  type : ShopActionTypes.FETCH_COLLECTIONS_REQUEST
});

//return [obj]
export const fetchCollectionsSuccess = collectionMap =>({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload:collectionMap
});


//return [obj]
export const fetchCollectionsFailure = errorMessage =>({
  type:ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload:errorMessage
})

/** return [functions] */
export const fetchCollectionsRequestAsync =() =>{
  return dispatch =>{
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsRequest());

    collectionRef
     .get()
   .then(snapShot =>{
          const collectionMap = convertCollectionsSnapshotToMap(snapShot);
          dispatch(fetchCollectionsSuccess(collectionMap));
      }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
    }
  }


  


