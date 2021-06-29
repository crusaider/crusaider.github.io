import { Container } from "@chakra-ui/react";
import React, { FC } from "react";

const Content: FC = ({ children }) => (
  <Container as="article" height="100%">
    {children}
  </Container>
);

export default Content;
