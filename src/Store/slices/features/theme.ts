import { createSlice } from '@reduxjs/toolkit'

export const themeFeatureSlice = createSlice({
  name: 'theme',
  initialState: { theme: 'default', darkMode: false } as ThemeState,
  reducers: {
    changeTheme: (state, { payload: { theme, darkMode } }: ThemePayload) => {
      if (typeof theme !== 'undefined') {
        state.theme = theme
      }
      if (typeof darkMode !== 'undefined') {
        state.darkMode = darkMode
      }
    },
    setDefaultTheme: (
      state,
      { payload: { theme, darkMode } }: any,
    ) => {
      if (!state.theme) {
        if (typeof theme !== 'undefined') {
          state.theme = theme
        }
        if (typeof darkMode !== 'undefined') {
          state.darkMode = darkMode
        }
      }
    },
  },
})

export const { changeTheme, setDefaultTheme } = themeFeatureSlice.actions;
  
export const themeFeatureReducer = themeFeatureSlice.reducer;

export type ThemeState = {
  theme: 'default' 
  darkMode: boolean 
}

type ThemePayload = {
  payload: Partial<ThemeState>
}