import { MoonIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Container,
  Heading,
  IconButton,
  Spacer,
} from "@chakra-ui/react";
import React, { FC } from "react";

const Header: FC = () => {
  return (
    <Box as="header" backgroundColor="blue" padding="4">
      <Center>
        <Container width="100%" display="flex">
          <Heading as="h1" color="white" size="lg">
            crusaider.github.io
          </Heading>
          <Spacer></Spacer>
          <IconButton
            backgroundColor="blue"
            aria-label="dark theme"
            icon={<MoonIcon color="white" />}
          ></IconButton>
        </Container>
      </Center>
    </Box>
  );
};

export default Header;
