import { ChakraProvider } from "@chakra-ui/react";
import Header from "@components/header";
import type { AppProps } from "next/app";
import React from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Header></Header>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
