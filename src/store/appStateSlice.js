import { createSlice } from '@reduxjs/toolkit';

const initialAppState = {
  theme: 'dark',
  language: 'en',
};

const appStateSlice = createSlice({
  name: 'appState',
  initialState: initialAppState,
  reducers: {
    toggleTheme: (state) => {
      state.theme === 'dark' ? (state.theme = 'light') : (state.theme = 'dark');
    },
    setLanguage: (state, action) => {
      state.language = action.payload.language;
    },
  },
});

export const appActions = appStateSlice.actions;

export default appStateSlice.reducer;
