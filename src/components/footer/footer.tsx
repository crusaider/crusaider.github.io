import { Box, Center, Container } from "@chakra-ui/react";
import React, { FC } from "react";

const Footer: FC = () => (
  <Box as="footer">
    <Center>
      <Container width="100%" display="flex" alignItems="center">
        Footer
      </Container>
    </Center>
  </Box>
);
export default Footer;
