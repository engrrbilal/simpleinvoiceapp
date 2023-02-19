import moment from "moment";
import { DATE_FORMATS } from "./Date";

export const INVOICE_DEFAULT_PAGINATION =  {
    pageNum : 1,
    pageSize : 10,
    dateType : 'INVOICE_DATE',
    sortBy : 'CREATED_DATE',
    ordering: 'DESCENDING',
    fromDate: moment().subtract(1, 'year').startOf('week').format(DATE_FORMATS.dateFormate),
    toDate: moment(new Date()).format(DATE_FORMATS.dateFormate)
}

export const INTIAL_INVOICE_CREATE_DATA = {
    invoiceNumber: '',
    amount: '',
    invoiceDate: moment(new Date()).format(DATE_FORMATS.dateFormate),
    description: '',
    isDatePickerVisible: false,
}