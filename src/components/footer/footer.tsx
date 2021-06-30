import { Box, Center, Container, Link, Spacer, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

const FZ = 'sm';

const Footer: FC = () => {
  return (
    <Box as="footer" marginTop="4" padding="4">
      <Center>
        <Container
          width="100%"
          display="flex"
          alignItems="center"
          flexDirection={{
            base: 'column',
            md: 'row',
          }}
        >
          <Text fontSize={FZ}>
            Copyright &#169; {new Date().getFullYear()} Jonas Andreasson
          </Text>
          <Spacer />
          <Text fontSize={FZ}>
            Built with <Link href="https://nextjs.org/">Next JS</Link> and{' '}
            <Link href="https://chakra-ui.com/">Chakra UI</Link>
          </Text>
        </Container>
      </Center>
    </Box>
  );
};
export default Footer;
