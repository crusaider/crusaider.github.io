import { ChakraProvider } from '@chakra-ui/react';
import Content from '@components/content';
import Footer from '@components/footer';
import Header from '@components/header';
import theme from '@theme/theme';
import type { AppProps } from 'next/app';
import React from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer />
    </ChakraProvider>
  );
};
export default MyApp;
