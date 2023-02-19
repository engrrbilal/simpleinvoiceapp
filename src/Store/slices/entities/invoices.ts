import { INVOICE_DEFAULT_PAGINATION } from '@/Constants/Invoice';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  data: {
    invoices: [],
    pagination: INVOICE_DEFAULT_PAGINATION,
  },
};

export const invoicesFeatureSlice = createSlice({
  name: 'invoices',
  initialState: INITIAL_STATE,
  reducers: {
    fetchInvoicesSuccess: (state: any, action: PayloadAction<[]>) => {
      const { pageNum } = state.data.pagination
      state.data.invoices = pageNum === 1 ? action?.payload : [...state.data.invoices, ...action?.payload];//concat data for pagination 
    },
    updatePagination: (state: any, action: PayloadAction<IPagination>) => {
      state.data.pagination = action?.payload;
    },
  },
});

export const {
  fetchInvoicesSuccess,
  updatePagination
} = invoicesFeatureSlice.actions;

export const invoicesEntityReducer = invoicesFeatureSlice.reducer;
