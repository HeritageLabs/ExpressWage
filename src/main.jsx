/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import WebRoutes from './routes/index.jsx'
import { BrowserRouter } from 'react-router-dom'
import '@rainbow-me/rainbowkit/styles.css';
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
  avalancheFuji, arbitrumGoerli, goerli
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
  [avalancheFuji, arbitrumGoerli, goerli,   mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    zora,],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "ExpressWage",
  projectId: `${process.env.VITE_REACT_APP_WALLET_PROJECT_ID}`,
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient,
  connectors,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider chains={chains} theme={darkTheme({
      accentColor: '#2250F1',
      accentColorForeground: 'white',
      borderRadius: 'medium',
      fontStack: 'system',
      overlayBlur: 'small',
    })}>
      <WebRoutes />
    </RainbowKitProvider>
    </WagmiConfig>
    </BrowserRouter>
  </React.StrictMode>,
)
