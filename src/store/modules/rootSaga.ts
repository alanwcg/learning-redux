import { all } from 'redux-saga/effects';

import { cartSagas } from './cart/sagas';

export function* rootSaga(): Generator<any> {
  return yield all([cartSagas]);
}