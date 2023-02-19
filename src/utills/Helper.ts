import Toast from 'react-native-simple-toast';
import { INVOICE_POST_DATA } from "@/Constants/invoice-post-data";

export default class Helper {

  static numberFormate(number: number, currency: string) {
    const THOUSAND_FORMATTER = new RegExp(/\B(?=(\d{3})+(?!\d))/g);
    if (!Boolean(number)) {
      return `${currency ? currency : "PR"} 0.00`;
    }
    let numberFormate = number.toFixed(2).toString();
    const numberSplitter = ".";
    if (numberFormate?.includes?.(numberSplitter)) {
      const numberToFormat = numberFormate?.split(numberSplitter);
      return `${currency ? currency : ""} ${[numberToFormat?.[0]?.replace(THOUSAND_FORMATTER, ","), numberToFormat?.[1]]
        .join(numberSplitter)
        .trim()}`;
    }
    return `${currency ? currency : ""} ${numberFormate?.replace?.(THOUSAND_FORMATTER, ",")}`
  }

  static getCreateInvoiceFormatedData(data: Record<string, any>) {
    const {amount, invoiceNumber, description, invoiceDate } = data;
    const invoiceData = {...INVOICE_POST_DATA};
    const invoiceoObjData = invoiceData?.invoices[0];
    invoiceoObjData.invoiceReference = Math.random().toString(36).substring(10);
    invoiceoObjData.totalAmount = amount;
    invoiceoObjData.invoiceNumber= invoiceNumber;
    invoiceoObjData.quantity= Math.floor(Math.random() * 10) + 1;
    invoiceoObjData.invoiceDate = invoiceDate;
    invoiceoObjData.description = description;
    return invoiceData
  }
  static showToast(msg = "Info") {
    Toast.show(msg, Toast.LONG)
  }
}