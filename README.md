# ⚡ FaastPay – The Fastest Web3 Wallet on Polygon (Amoy)

![FaastPay Banner]() <!-- Replace with your banner later -->

### 💼 Built by [Boss](https://github.com/prabalvarshney21)
> A Phantom-inspired Web3 wallet that lets users send, receive, and manage **FAAST Coins** seamlessly on the **Polygon Amoy Testnet**.

---

## 🪙 Overview
FaastPay is a **next-generation decentralized wallet** built with **React (Vite)** and **Ethers.js**, designed for speed, simplicity, and a premium UI experience.  
The project demonstrates a **functional, non-custodial wallet** that connects directly to **MetaMask**, fetches **MATIC + FAAST balances**, and enables instant token transfers.

---

## ✨ Features

| Feature | Description |
|----------|-------------|
| 🔗 MetaMask Integration | One-click wallet connection via `ethers.BrowserProvider` |
| 💰 Real-time Balances | Fetch both MATIC and custom FAAST token balance |
| 🚀 Send FAAST Coins | Execute ERC-20 token transfers on Polygon Amoy |
| 🔔 Transaction Feedback | Animated success/error toasts using `react-hot-toast` |
| 🎨 Phantom UI | Custom-built dark glassmorphic interface (no Tailwind) |
| 🧩 Modular Codebase | Clean component structure ready for scaling |
| 🧠 Future Ready | Hooks for transaction history & confetti animations |

---

## 🧠 Tech Stack

- **Frontend:** React + Vite  
- **Blockchain:** Polygon Amoy Testnet  
- **Web3 Library:** Ethers.js v6  
- **UI:** Framer Motion, Custom CSS  
- **Notifications:** react-hot-toast  
- **Design Philosophy:** Minimal, Fast, Modern  

## 🛠️ Setup Instructions

```bash
# Clone the repository
git clone https://github.com/prabalvarshney21/faastpay-wallet.git
cd faastpay-wallet

# Install dependencies
npm install

# Copy example environment file
VITE_TOKEN_ADDRESS=0xA1f129d92C9CbaeCCa8751903a17566868164fD2
VITE_RPC_URL=https://rpc-amoy.polygon.technology

