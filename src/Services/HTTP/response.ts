import { AxiosResponse } from 'axios';
// import isEmpty from 'lodash.isempty';
import { RESPONSE_TYPES, STATUS_CODES } from '@/Constants/ResponseTypes';
// TODO refine this according to the response you get from the server
export const prepareResponseObject = (response: AxiosResponse<any> | any, status?: string): IResponseData<any> => {
  const finalResponse = {
    data: null,
    error: true,
    statusCode: STATUS_CODES.INTERNAL_SERVER_ERROR,
    statusText: response?.message || response?.statusText,
  };

  if (response.noInternet) {
    return {
      ...finalResponse,
      data: { message: 'offline' },
      statusCode: STATUS_CODES.BAD_GATEWAY,
    };
  }

  if (!status) {
    return finalResponse;
  } else if (status === RESPONSE_TYPES.SUCCESS) {
    return {
      data: response?.data?.data || response?.data,
      statusMessage: response?.data?.userMessage || response?.data?.message || response?.data?.data?.message,
      statusCode: response?.status,
      error: response?.status !== STATUS_CODES.SUCCESS,
      statusText: response?.statusText || response?.data?.message,
    };
  } else if (status === RESPONSE_TYPES.ERROR_RESPONSE) {
    const { data: { error } } = response;
    let errorData = response?.data;
    let statusCode = response?.code || response?.statusCode;
    let statusText = response?.message;

    if (typeof error === 'object') {
      statusCode = response?.data?.error?.code;
      statusText = error?.message;
      errorData = error;
    } else if (Array.isArray(response?.data?.errors)) {
      statusCode = response?.status;
      statusText = response?.data?.errors[0].message;
      errorData = response?.data?.errors[0];
    }

    return {
      ...finalResponse,
      data: errorData,
      statusCode,
      statusText,
    };
  } else if (status === RESPONSE_TYPES.ERROR_REQUEST) {
    return {
      ...finalResponse,
      statusText: response,
    };
  }

  return finalResponse;
};

export const prepareErrorResponse = (error: AxiosResponse<any> | any): any => {
  if (error?.response) {
    return prepareResponseObject(error.response, RESPONSE_TYPES.ERROR_RESPONSE);
  } else if (error?.request) {
    return prepareResponseObject(error.request, RESPONSE_TYPES.ERROR_REQUEST);
  }

  return prepareResponseObject(error);
};

export const prepareErrorResponseForSpotOrder = (error: AxiosResponse<any> | any): any => {
  if (typeof error?.response === 'object') {
    const errorResponse = {
      data: { },
      error: true,
      statusCode: STATUS_CODES.BAD_REQUEST,
      statusText: null,
    };

    const errorData = error.response?.data?.data || error.response?.data;
    return errorData?? errorResponse
   
  }

  return prepareErrorResponse(error);
};
