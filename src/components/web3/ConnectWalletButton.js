import React from 'react';
import { useDispatch } from 'react-redux';

import { web3actions } from '../../store/web3StateSlice';
import notification from '../ui/Notifications';

const ConnectWalletButton = () => {
  const dispatch = useDispatch();
  const connectWalletHandler = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert('Get MetaMask -> https://metamask.io/');
        return;
      }

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      const chainId = await ethereum.request({ method: 'eth_chainId' });
      dispatch(web3actions.connectAccount({ accounts, chainId }));
      notification('Conexión exitosa a MetaMask', 'success');
    } catch (error) {
      console.log(error);
      notification('Conexión fallida', 'danger');
    }
  };
  return (
    <button
      className="uk-button uk-button-primary"
      onClick={connectWalletHandler}
    >
      Connect Wallet
    </button>
  );
};

export default ConnectWalletButton;
