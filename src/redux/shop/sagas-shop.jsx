import { takeLatest, call, put } from 'redux-saga/effects';
import ShopActionTypes from './types-shop';
import { 
    fetchCollectionsSuccess,
    fetchCollectionsFailure} from './act-shop';
import {firestore,convertCollectionsSnapshotToMap} from './../../firebase/firebase-util';
/** (function*) means generator function 
 * all functions run at same time, won't block the exectutuin
*/

export function* fetchCollections() {
    try {
      const collectionRef = firestore.collection('collections');
      const snapshot = yield collectionRef.get();
      const collectionsMap = yield call(
        convertCollectionsSnapshotToMap,
        snapshot
      );
      yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
      yield put(fetchCollectionsFailure(error.message));
    }
  }
  
  export function* onFetchCollectionsRequest() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_REQUEST, fetchCollections);
  }


  /** [take] => only one time listens
   * [takeEvery] => runs every time
   * [generator function ] => will never end 
   */