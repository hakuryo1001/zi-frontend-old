// @ts-nocheck
import type { AppProps } from 'next/app';
import { createContext } from 'react';
import { ContractProvider } from '../contexts';
import Layout from '../components/layout';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { createConfig, configureChains, WagmiConfig } from 'wagmi';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'


import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';

import { goerli } from '@wagmi/core/chains';

// const ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY


// const supportedChains = ["canto"];

import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { localhost } from 'wagmi/chains'



const { chains, publicClient, webSocketPublicClient } = configureChains(
  [localhost],
  [alchemyProvider({ apiKey: 'yourAlchemyApiKey' }), publicProvider()],
)

export const injectedConnector = new InjectedConnector({
  chains: chains,
})

// Set up wagmi config
const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: '...',
      },
    }),
    injectedConnector
    // new InjectedConnector({
    //   chains,
    //   options: {
    //     name: 'Injected',
    //     shimDisconnect: true,
    //   },
    // }),
  ],
  publicClient,
  webSocketPublicClient,
})



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains}>
        <ContractProvider>
        <Layout >
          <Component {...pageProps} />
        </Layout>
        </ContractProvider>
      </RainbowKitProvider>

    </WagmiConfig>
  )
}

export default MyApp