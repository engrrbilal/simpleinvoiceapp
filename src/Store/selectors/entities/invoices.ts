import { createSelector } from "@reduxjs/toolkit";
import { getInvoicesSearchTerm } from "../features";

const baseSelector = (state: TReduxState) => state?.entities.invoices || '';

export const getInvoicesPagination = createSelector(baseSelector, (state: any) => state?.data?.pagination);

export const getInvoices = createSelector(baseSelector, getInvoicesSearchTerm,
     (state: any, searchTerm: string) => {
    let matchText = searchTerm.toLocaleLowerCase()
    let  invoicesData = state?.data?.invoices;
    if (!searchTerm) {
        return invoicesData;
    }
   return invoicesData.filter((invoice: Record<string, any>) => {
    const {invoiceNumber, totalAmount, totalDiscount} = invoice;
    return (invoiceNumber?.toString()?.includes(matchText) || 
    totalAmount?.toString()?.includes(matchText) || 
    totalDiscount?.toString()?.includes(matchText))
    })
});
