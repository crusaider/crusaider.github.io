import { ChakraProvider } from '@chakra-ui/react';
import Content from '@components/content';
import Footer from '@components/footer';
import Header from '@components/header';
import theme from '@theme/theme';
import type { AppProps } from 'next/app';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Content>
          <Component {...pageProps} />
        </Content>
        <Footer />
      </QueryClientProvider>
    </ChakraProvider>
  );
};
export default MyApp;
