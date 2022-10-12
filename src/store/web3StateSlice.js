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
      state.accounts = payload.accounts;
      state.connectedAccount = payload.accounts[0];
      state.networkId = payload.chainId;
      state.networkName = networks[chainId];
    },
    disconnectAccount: (state) => {
      state = initialWeb3State;
    },
  },
});
