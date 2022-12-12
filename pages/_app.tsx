import { ChakraProvider } from '@chakra-ui/react';
import { createClient, configureChains, WagmiConfig, Chain } from 'wagmi';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

import { extendTheme } from '@chakra-ui/react';
import { publicProvider } from 'wagmi/providers/public';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider, connectorsForWallets } from '@rainbow-me/rainbowkit';
import { metaMaskWallet, walletConnectWallet, rainbowWallet, coinbaseWallet } from '@rainbow-me/rainbowkit/wallets';
import constants from '../constants';

const { provider, webSocketProvider, chains } = configureChains(
  [constants.CHAIN.bscChain as Chain],
  [publicProvider()],
);
const emotionCache = createCache({
  key: 'emotion-css-cache',
  prepend: true,
});

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet({ chains }),
      walletConnectWallet({ chains }),
      rainbowWallet({ chains }),
      coinbaseWallet({ appName: 'coinbase', chains }),
    ],
  },
]);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
  connectors,
});

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CacheProvider value={emotionCache}>
      <ChakraProvider resetCSS theme={theme}>
        <WagmiConfig client={client}>
          <RainbowKitProvider chains={chains} modalSize="compact">
            <SessionProvider session={pageProps.session} refetchInterval={0}>
              <Component {...pageProps} />
            </SessionProvider>
          </RainbowKitProvider>
        </WagmiConfig>
      </ChakraProvider>
    </CacheProvider>
  );
};

export default MyApp;
