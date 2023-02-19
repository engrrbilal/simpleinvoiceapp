import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  validationStates: {
    isAuthenticating: false,
    isAuthenticated: false,
    isFetchingOrgToken: false,
    isFetchedOrgToken: false,
    error: null,
  },
};

export const authFeatureSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    getAccessToken: state => {
        state.validationStates.isAuthenticating = true;
        state.validationStates.isAuthenticated = false;
    },
    getAccessTokenSuccess: state => {
        state.validationStates.isAuthenticated = true;
        state.validationStates.isAuthenticating = false;
    },
    getAccessTokenFailure: state => {
        state.validationStates.isAuthenticated = false;
        state.validationStates.isAuthenticating = false;
    },
    getUserOrgToken: state => {
        state.validationStates.isFetchingOrgToken = true;
        state.validationStates.isFetchedOrgToken = false;
    },
    getUserOrgTokenSuccess: state => {
        state.validationStates.isFetchingOrgToken = false;
        state.validationStates.isFetchedOrgToken = true;
    },
    getUserOrgTokenFailure: state => {
        state.validationStates.isFetchingOrgToken = false;
        state.validationStates.isFetchedOrgToken = false;
    },
  },
});

export const {
  getAccessToken,
  getAccessTokenSuccess,
  getAccessTokenFailure,
  getUserOrgToken,
  getUserOrgTokenSuccess,
  getUserOrgTokenFailure
} = authFeatureSlice.actions;

export const authFeatureReducer = authFeatureSlice.reducer;
