import { createSelector } from "@reduxjs/toolkit";

const baseSelector = (state: TReduxState) => state?.features.auth || '';

const validationStatesSelector = createSelector(baseSelector, (state: any) => state?.validationStates);

export const getIsAuthenticating = createSelector(validationStatesSelector, (state: any) => state?.isAuthenticating);

export const getIsAuthenticated = createSelector(validationStatesSelector, (state: any) => state?.isAuthenticated);

export const getIsOrgTokenFetching = createSelector(validationStatesSelector, (state: any) => state?.isFetchingOrgToken);

export const getIsOrgTokenFetched = createSelector(validationStatesSelector, (state: any) => state?.isFetchedOrgToken);
