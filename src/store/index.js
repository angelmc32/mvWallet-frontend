import { configureStore } from '@reduxjs/toolkit';
import appStateReducer from './appStateSlice';

const store = configureStore({
  reducer: {
    appState: appStateReducer,
  },
});

export default store;
