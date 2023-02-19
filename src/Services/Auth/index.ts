import { HttpService } from '../HTTP';
import { RESPONSE_TYPES } from '@/Constants/ResponseTypes';
import { prepareErrorResponse, prepareResponseObject } from '../HTTP/response';

export class AuthService extends HttpService {

  getAccessToken = async (baseAuthUrl: string, data: Record<string, string>): Promise<any> => {
    try {
      const customHeader = {headers :{"Content-Type": "application/x-www-form-urlencoded"}}
      const apiResponse = await this.post(`${baseAuthUrl}/token?tenantDomain=carbon.super`, data, customHeader);
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };
  getUserOrgToken = async (baseAuthUrl: string): Promise<any> => {
    try {
      const apiResponse = await this.get(`${baseAuthUrl}/membership-service/1.2.0/users/me`);
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };
}
