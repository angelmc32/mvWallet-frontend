import { useDispatch } from 'react-redux';
import { web3actions } from '../store/web3StateSlice';

const useConnectWallet = async (window) => {
  const dispatch = useDispatch();
  try {
    const { ethereum } = window;

    if (!ethereum) {
      alert('Get MetaMask -> https://metamask.io/');
      return false;
    }

    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    console.log('Connected', accounts[0]);
    dispatch(web3actions.connectAccount({ accounts }));
  } catch (error) {
    console.log(error);
  }
  return true;
};

export default useConnectWallet;
