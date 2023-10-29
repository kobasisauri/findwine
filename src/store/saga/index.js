import { all, takeLatest } from 'redux-saga/effects';

import {
  // CHECK_SIGNED_IN,
  LOGOUT,
  REQUEST_SIGN_IN_SG,
  REQUEST_SIGN_UP_SG,
  RESET_PASSWORD,
} from '../ducks/authDucks';

import {
  logoutSaga,
  resetPasswordSaga,
  signInSaga,
  signUpSaga,
} from './authSaga';

function* actionWatcher() {
  // yield takeLatest(CHECK_SIGNED_IN, checkSignedInSaga);
  yield takeLatest(REQUEST_SIGN_IN_SG, signInSaga);
  yield takeLatest(REQUEST_SIGN_UP_SG, signUpSaga);
  yield takeLatest(LOGOUT, logoutSaga);
  yield takeLatest(RESET_PASSWORD, resetPasswordSaga);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
