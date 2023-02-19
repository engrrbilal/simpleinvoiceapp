import { createSelector } from "@reduxjs/toolkit";

const baseSelector = (state: TReduxState) => state?.features.invoices || '';

const validationStatesSelector = createSelector(baseSelector, (state: any) => state?.validationStates);

export const getIsFetchingInvoices = createSelector(validationStatesSelector, (state: any) => state?.isFetchingInvoices);

export const getIsMoreDataAvailable = createSelector(validationStatesSelector,(state: any) => state?.isMoreDataAvailable);

export const getInvoicesSearchTerm = createSelector(baseSelector, (state: any) => state?.data.searchTerm);

export const getIsInvoiceCreating = createSelector(validationStatesSelector, (state: any) => state?.isInvoiceCreating);

export const getIsInvoiceCreated = createSelector(validationStatesSelector, (state: any) => state?.isInvoiceCreated);
