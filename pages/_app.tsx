import { ChakraProvider } from '@chakra-ui/react';
import { createClient, configureChains, defaultChains, WagmiConfig } from 'wagmi';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

import { extendTheme } from '@chakra-ui/react';
import { publicProvider } from 'wagmi/providers/public';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

const { provider, webSocketProvider } = configureChains(defaultChains, [publicProvider()]);
const emotionCache = createCache({
  key: 'emotion-css-cache',
  prepend: true, 
});
const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
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
        <SessionProvider session={pageProps.session} refetchInterval={0}>
          <Component {...pageProps} />
        </SessionProvider>
      </WagmiConfig>
    </ChakraProvider>
    </CacheProvider>
  );
};

export default MyApp;
