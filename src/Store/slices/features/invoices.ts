import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  data: {
    searchTerm: '',
  },
  validationStates: {
    isFetchingInvoices: false,
    isMoreDataAvailable: false,
    isInvoiceCreating: false,
    isInvoiceCreated: false,
    error: null,
  },
};

export const invoicesFeatureSlice = createSlice({
  name: 'invoices',
  initialState: INITIAL_STATE,
  reducers: {
    fetchInvoices: (state, _action) => {
      state.validationStates.isFetchingInvoices = true;
      state.validationStates.isMoreDataAvailable = false;
    },
    fetchInvoicesSuccess: (state, action) => {
      state.validationStates.isFetchingInvoices = false;
      /* Flag to keep track if new data available b/c totalPagesCount is not available in api*/
      state.validationStates.isMoreDataAvailable = !!action?.payload?.length;
    },
    fetchInvoicesFailure: state => {
      state.validationStates.isFetchingInvoices = false;
    },
    setInvoicesSearchTerm: (state, action: PayloadAction<string>) => {
      state.data.searchTerm = action.payload;
      /* set flag to false while searching client side*/
      state.validationStates.isMoreDataAvailable = false;
    },
    createInvoice: (state: any, _action) => {
      state.validationStates.isInvoiceCreating = true;
      state.validationStates.isInvoiceCreated = false;

    },
    createInvoiceSuccess: state => {
      state.validationStates.isInvoiceCreating = false;
      state.validationStates.isInvoiceCreated = true;
    },
    resetCreateInvoice: state => {
      state.validationStates.isInvoiceCreating = false;
      state.validationStates.isInvoiceCreated = false;
    },
  },
});

export const {
  fetchInvoices,
  fetchInvoicesSuccess,
  fetchInvoicesFailure,
  setInvoicesSearchTerm,
  createInvoice,
  createInvoiceSuccess,
  resetCreateInvoice
} = invoicesFeatureSlice.actions;

export const invoicesFeatureReducer = invoicesFeatureSlice.reducer;
