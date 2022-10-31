import { configureStore } from '@reduxjs/toolkit';
import appStateReducer from './appStateSlice';
import web3StateReducer from './web3StateSlice';

const store = configureStore({
  reducer: {
    appState: appStateReducer,
    web3State: web3StateReducer,
  },
});

export default store;
