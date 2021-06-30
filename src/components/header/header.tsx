import {
  Box,
  Center,
  Container,
  Divider,
  Heading,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react';
import { GitHubUserAvatar } from '@components/git-hub';
import React, { FC } from 'react';
import ThemeToggle from './theme-toggle';

const Header: FC = () => {
  const bg = useColorModeValue('blue.200', 'blue.600');
  return (
    <>
      <Box bg={bg} as="header" padding="2">
        <Center>
          <Container width="100%" display="flex" alignItems="center">
            <GitHubUserAvatar username="crusaider" />
            <Heading as="h1" size="lg" marginLeft="2">
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
