import { ThemeState } from "@/Store/slices/features";
import { createSelector } from "@reduxjs/toolkit";

const baseSelector = (state: TReduxState) => state?.features.theme || '';
// Get current theme from the store
export const getCurrentTheme = createSelector(baseSelector, (state: ThemeState) => state?.theme);

export const getIsDarkTheme = createSelector(baseSelector, (state: ThemeState) => state?.darkMode );
