import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { ethers } from "ethers";
import useForm from "../hooks/useForm";
import ConnectWalletButton from "../components/web3/ConnectWalletButton";
import { WALLET_FACTORY_CONTRACT_ADD } from "../smart-contracts/contracts";
import WalletFactoryABI from "../smart-contracts/ABI/WalletFactoryABI.json";
import WalletABI from "../smart-contracts/ABI/WalletABI.json";

const Wallet = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState(null);
  const [walletAddress, setWalletAddress] = useState(null);
  const { form, handleInput, resetForm } = useForm();
  const { isConnected } = useSelector((state) => state.web3State);
  // console.log(web3state);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const { username } = form;
    console.log(username);
    if (username.length < 5) {
      alert("Domain must be at least 5 characters long");
      return;
    }
    try {
      await claimWalletUsername(username);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const claimWalletUsername = async (username) => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          WALLET_FACTORY_CONTRACT_ADD,
          WalletFactoryABI.abi,
          signer
        );

        console.log("Going to pop wallet now to pay gas...");
        let tx = await contract.createWallet(username);
        setUsername(username);
        // Wait for the transaction to be mined
        const receipt = await tx.wait();

        // Check if the transaction was successfully completed
        if (receipt.status === 1) {
          console.log(
            "Wallet created! https://mumbai.polygonscan.com/tx/" + tx.hash
          );
          let userWallet = await contract.getWalletByUsername(username);
          setWalletAddress(userWallet);
        } else {
          alert("Transaction failed! Please try again");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <div className="uk-height-1-1 uk-flex uk-flex-column uk-flex-middle">
        <h2 className="uk-margin-top">
          {walletAddress ? "Your Wallet" : "Wallet creation"}
        </h2>
        {!walletAddress ? (
          isConnected ? (
            <form
              onSubmit={handleSubmit}
              className="uk-form uk-flex uk-flex-column uk-flex-middle"
            >
              <div className="uk-form-controls">
                <input
                  name="username"
                  id="username"
                  type="text"
                  className="uk-input uk-text-center"
                  placeholder="enter desired username"
                  onChange={handleInput}
                  required
                />
              </div>
              <button
                className="uk-button uk-button-primary uk-margin"
                disabled={isLoading}
              >
                {isLoading ? "Claiming wallet" : "Claim Wallet"}
                {isLoading && <div uk-spinner="true" />}
              </button>
            </form>
          ) : (
            <ConnectWalletButton />
          )
        ) : (
          <div className="uk-flex uk-flex-column uk-flex-middle">
            <h4 className="uk-margin-remove">{username}</h4>
            <h5 className="uk-margin-remove">{walletAddress}</h5>
            <div className="uk-margin uk-width-1-1 uk-flex uk-flex-around">
              <button className="uk-button uk-button-primary">Deposit</button>
              <button className="uk-button uk-button-primary">Send</button>
            </div>
            <a href={`https://mumbai.polygonscan.com/address/${walletAddress}`}>
              Check on Polygon scanner
            </a>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Wallet;
