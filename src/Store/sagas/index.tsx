import { all } from 'redux-saga/effects';
import { authSagas } from './auth';
import { invoicesSagas } from './invoices';

export default function* rootSaga () {
  yield all([
    ...authSagas,
    ...invoicesSagas
  ]);
}
