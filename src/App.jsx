import React from "react";
import Navbar from "./components/Navbar";
import WalletDashboard from "./components/WalletDashboard";
import TransactionHistory from "./components/TransactionHistory";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="px-8 py-10">
        <WalletDashboard />
        <TransactionHistory />
      </main>
      <Toaster position="top-right" />
    </div>
  );
}
