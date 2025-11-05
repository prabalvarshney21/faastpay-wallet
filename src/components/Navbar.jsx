import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-gray-800 p-4 shadow-md">
      <h1 className="text-xl font-bold text-yellow-400">⚡ FaastPay</h1>
      <span className="text-sm text-gray-300">Your Fastest Crypto Wallet</span>
    </nav>
  );
}
