import { InjectedConnector } from 'wagmi/connectors/injected'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { configureChains } from 'wagmi'
import { localhost } from 'wagmi/chains'

export const { chains, publicClient, webSocketPublicClient } = configureChains(
  [localhost],
  [
    // alchemyProvider({ apiKey: 'yourAlchemyApiKey' }),
     publicProvider()],
)

export const injectedConnector = new InjectedConnector({
  chains: [localhost],
})

export const config = {
  autoConnect: true,
  connectors: [
   
    injectedConnector,
  ],
  publicClient,
  webSocketPublicClient,
}