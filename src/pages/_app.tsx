import { Web3ReactProvider } from '@web3-react/core';
import { providers } from 'ethers';
import '../styles/global.css'

function getLibrary(provider: any, connector: any) {
  return new providers.Web3Provider(provider);
}

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  )
}

export default MyApp
