import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { FC } from 'react';

const ErrorMessage: FC<{ error: Error }> = ({ error, children }) => {
  const bg = useColorModeValue('red.200', 'red.400');

  return (
    <Accordion allowToggle={true} bg={bg}>
      <AccordionItem>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            {children}
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <p>{error.name}</p>
          <p>{error.message}</p>
          {error.stack ? <p>{error.stack}</p> : null}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default ErrorMessage;
