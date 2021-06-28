import {
  Box,
  Center,
  Container,
  Divider,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import React, { FC } from "react";
import ThemeToggle from "./theme-toggle";

const Header: FC = () => {
  return (
    <>
      <Box as="header" padding="2">
        <Center>
          <Container width="100%" display="flex" alignItems="center">
            <Heading as="h1" size="lg">
              crusaider.github.io
            </Heading>
            <Spacer></Spacer>
            <ThemeToggle />
          </Container>
        </Center>
      </Box>
      <Divider />
    </>
  );
};

export default Header;
