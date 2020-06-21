import { all, call } from 'redux-saga/effects';

import { onFetchCollectionsRequest } from './shop/sagas-shop';

export default function* rootSaga() {
  yield all([call(onFetchCollectionsRequest)]);
}