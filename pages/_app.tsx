import { ChakraProvider } from "@chakra-ui/react";
import Header from "@components/header";
import theme from "@theme/theme";
import type { AppProps } from "next/app";
import React from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};
export default MyApp;
