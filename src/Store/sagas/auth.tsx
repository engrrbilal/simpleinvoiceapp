import { AuthService, LocalStorageService } from '../../Services';
import { Config } from '@/Constants/Config';
import { takeEvery, call, put } from 'redux-saga/effects';
import {
  getAccessTokenSuccess,
  getAccessTokenFailure,
  getUserOrgTokenSuccess,
  getUserOrgTokenFailure,
} from '@/Store/slices/features';
import Helper from '@/utills/Helper';
import { t } from 'i18next';

const authService = new AuthService();
const localStorageService = new LocalStorageService();

function* getAccessToken () {
  try {
    const baseUrl: string = Config.API_URL;
    const authParams = {
      client_id: Config.CLIENT_ID,
      client_secret: Config.CLIENT_SECRET,
      grant_type: Config.GRANT_TYPE,
      scope: Config.SCOPE,
      username: Config.USERNAME,
      password: Config.PASSWORD
    }
    const response: IResponseData<any> = yield call(
      authService.getAccessToken,
      baseUrl,
      authParams,
    );
    const { data: { access_token } } = response;
    if(access_token) localStorageService.persist('accessToken', access_token);
    yield put(getAccessTokenSuccess());
  } catch (error: any) {
    yield put(getAccessTokenFailure());
    Helper?.showToast(error?.statusMessage ? error?.statusMessage : t('api.authError'))
  }
}
function* getUserOrgToken () {
  try {
    const baseUrl: string = Config.API_URL;
    const response: IResponseData<any> = yield call(
      authService.getUserOrgToken,
      baseUrl
    );
    const { data: { memberships } } = response;
    if(memberships[0]?.organisationId) localStorageService.persist('org_token', memberships[0]?.organisationId);
    yield put(getUserOrgTokenSuccess());
  } catch (error: any) {
    yield put(getUserOrgTokenFailure());

  }
}

export const authSagas = [
  takeEvery('auth/getAccessToken', getAccessToken),
  takeEvery('auth/getUserOrgToken', getUserOrgToken),
];
