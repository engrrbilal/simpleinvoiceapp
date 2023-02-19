import { HttpService } from '../HTTP';
import { RESPONSE_TYPES } from '@/Constants/ResponseTypes';
import { prepareErrorResponse, prepareResponseObject } from '../HTTP/response';
import Helper from '@/utills/Helper';

export class InvoicesService extends HttpService {

  fetchInvoices = async (baseAuthUrl: string, params: Record<string, any>): Promise<any> => {
      try {
        const apiResponse = await this.get(`${baseAuthUrl}/invoice-service/1.0.0/invoices`, params);
        return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
      } catch (error) {
        throw prepareErrorResponse(error);
      }
    };
  createInvoice = async (baseAuthUrl: string, data: Record<string, any>): Promise<any> => {
    try {
      const formatedData = Helper.getCreateInvoiceFormatedData(data)
      const customHeader = {headers :{'Operation-Mode': 'SYNC'}}
      const apiResponse = await this.post(`${baseAuthUrl}/invoice-service/2.0.0/invoices`, formatedData, customHeader);
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };
}
