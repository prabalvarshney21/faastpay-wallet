import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ethers } from "ethers";
import toast, { Toaster } from "react-hot-toast";
import { tokenABI } from "../contracts/tokenABI";

const TOKEN_ADDRESS = import.meta.env.VITE_TOKEN_ADDRESS;
const RPC_URL = import.meta.env.VITE_RPC_URL;

export default function WalletDashboard() {
  const [address, setAddress] = useState("");
  const [maticBalance, setMaticBalance] = useState("");
  const [faastBalance, setFaastBalance] = useState("");
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const connectWallet = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setAddress(accounts[0]);
      toast.success("Wallet connected ✅");
    } catch {
      toast.error("Connection failed ❌");
    }
  };

  const getBalances = async () => {
    try {
      const provider = new ethers.JsonRpcProvider(RPC_URL);
      const balance = await provider.getBalance(address);
      setMaticBalance(ethers.formatEther(balance));

      const tokenContract = new ethers.Contract(TOKEN_ADDRESS, tokenABI, provider);
      const tokenBal = await tokenContract.balanceOf(address);
      setFaastBalance(Number(ethers.formatUnits(tokenBal, 18)).toLocaleString());
    } catch (err) {
      console.error(err);
    }
  };

  const sendFaast = async () => {
    try {
      setLoading(true);
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const tokenContract = new ethers.Contract(TOKEN_ADDRESS, tokenABI, signer);

      const tx = await tokenContract.transfer(recipient, ethers.parseUnits(amount, 18));
      toast.loading("Transaction pending ⏳");
      await tx.wait();
      toast.dismiss();
      toast.success("Transaction successful 🎉");
      setAmount("");
      setRecipient("");
      getBalances();
    } catch (err) {
      toast.error("Transaction failed ❌");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (address) getBalances();
  }, [address]);

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center space-y-6 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Toaster position="top-right" />
      <motion.div
        className="card max-w-md w-full text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-3xl font-bold mb-4">⚡ FaastPay</h1>
        <p className="text-sm text-purple-300 mb-6">
          Your Fastest Crypto Wallet (Polygon Amoy)
        </p>

        {!address ? (
          <button onClick={connectWallet} className="btn w-full">
            Connect Wallet
          </button>
        ) : (
          <>
            <div className="text-left space-y-2 mb-4">
              <p>✅ Connected to Polygon Amoy</p>
              <p className="truncate">Address: {address}</p>
              <p>MATIC Balance: {Number(maticBalance).toFixed(6)} MATIC</p>
              <p>Faast Coin Balance: {faastBalance} FAAST</p>
            </div>

            <motion.div
              className="space-y-3 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <input
                className="input"
                placeholder="Recipient address"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
              />
              <input
                className="input"
                placeholder="Amount in FAAST"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <button
                className="btn w-full"
                onClick={sendFaast}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send FAAST"}
              </button>
            </motion.div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
