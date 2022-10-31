import { createSlice } from '@reduxjs/toolkit';
import { networks } from '../utils/networks';

const initialWeb3State = {
  isConnected: false,
  accounts: [],
  connectedAccount: null,
  networkId: null,
  networkName: null,
};

const web3StateSlice = createSlice({
  name: 'web3State',
  initialState: initialWeb3State,
  reducers: {
    connectAccount: (state, payload) => {
      console.log(payload);
      const { accounts, chainId } = payload.payload;
      console.log('Accounts: ', accounts);
      console.log('chainId: ', chainId);
      state.isConnected = true;
      state.accounts = accounts;
      state.connectedAccount = accounts[0];
      state.networkId = chainId;
      state.networkName = networks[chainId];
    },
    disconnectAccount: (state) => {
      state.isConnected = false;
      state.accounts = [];
      state.connectedAccount = null;
      state.networkId = null;
      state.networkName = null;
    },
  },
});

export const web3actions = web3StateSlice.actions;

export default web3StateSlice.reducer;
