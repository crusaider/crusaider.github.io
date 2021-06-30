import {
  Box,
  Center,
  Container,
  Divider,
  Heading,
  Link,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react';
import { GitHubUserAvatar } from '@components/git-hub';
import NextLink from 'next/link';
import React, { FC } from 'react';
import ThemeToggle from './theme-toggle';

const Header: FC = () => {
  const bg = useColorModeValue('blue.200', 'blue.600');
  return (
    <>
      <Box bg={bg} as="header" padding="2" position="fixed" width="100%">
        <Center>
          <Container width="100%" display="flex" alignItems="center">
            <NextLink href="/" passHref>
              <Link>
                <GitHubUserAvatar username="crusaider" />
              </Link>
            </NextLink>
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
