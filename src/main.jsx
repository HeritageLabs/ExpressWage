/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import WebRoutes from './routes/index.jsx';
import { BrowserRouter } from 'react-router-dom';
import '@rainbow-me/rainbowkit/styles.css';
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { celo, celoAlfajores } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { DashboardProvider } from './context/dashboard-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from "../src/components/ui/toaster";

const { chains, publicClient } = configureChains(
  [celoAlfajores, celo],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'ExpressWage',
  projectId: `${process.env.VITE_REACT_APP_WALLET_PROJECT_ID}`,
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient,
  connectors,
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={wagmiConfig}>
        <DashboardProvider>
          <RainbowKitProvider
            chains={chains}
            theme={darkTheme({
              accentColor: '#2250F1',
              accentColorForeground: 'white',
              borderRadius: 'medium',
              fontStack: 'system',
              overlayBlur: 'small',
            })}
          >
              <WebRoutes />
              <Toaster />
          </RainbowKitProvider>
        </DashboardProvider>
      </WagmiConfig>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
