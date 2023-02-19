import { InvoicesService } from '../../Services';
import { Config } from '@/Constants/Config';
import { takeEvery, call, put, select } from 'redux-saga/effects';
import { resetCreateInvoice, createInvoiceSuccess, fetchInvoicesFailure } from '@/Store/slices/features';
import { fetchInvoicesSuccess } from '../slices/entities';
import Helper from '@/utills/Helper';
import { t } from 'i18next';

const invoiceService = new InvoicesService();

function* fetchInvoices (action: { type: string; payload: IPagination }) {
  try {
    const baseUrl: string = Config.API_URL;
    const pagination  = action.payload;
    const response: IResponseData<any> = yield call(
      invoiceService.fetchInvoices,
      baseUrl,
      pagination,
    );
    const { data } = response;
    yield put(fetchInvoicesSuccess(data));
  } catch (error: any) {
    yield put(fetchInvoicesFailure());
    Helper?.showToast(error?.statusMessage ? error?.statusMessage : t('api.fetchError'))

  }
}

function* createInvoice (action: { type: string; payload: ICreateInvoiceData }) {
  try {
    const baseUrl: string = Config.API_URL;
    const invoiceData  = action.payload;
    const response: IResponseData<any> = yield call(
      invoiceService.createInvoice,
      baseUrl,
      invoiceData,
    );
    const { data } = response;
    yield put(createInvoiceSuccess());
    Helper?.showToast(t('api.success'))
  } catch (error: any) {
    yield put(resetCreateInvoice());
    Helper?.showToast(error?.statusMessage ? error?.statusMessage : t('api.createError'))
  }
}

export const invoicesSagas = [
  takeEvery('invoices/fetchInvoices', fetchInvoices),
  takeEvery('invoices/createInvoice', createInvoice),
];
