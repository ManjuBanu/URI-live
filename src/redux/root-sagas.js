import { all, call } from 'redux-saga/effects';

import { onFetchCollectionsRequest } from './shop/sagas-shop';
import {userSagas} from './user/sagas-user';
import {cartSagas} from './cart/sagas-cart';

export default function* rootSaga() {
  yield all([call(onFetchCollectionsRequest),call(userSagas),call(cartSagas)]);
}