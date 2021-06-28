import { Box } from "@chakra-ui/react";
import React, { FC } from "react";

const Content: FC = ({ children }) => (
  <Box as="article" height="100%">
    {children}
  </Box>
);

export default Content;
