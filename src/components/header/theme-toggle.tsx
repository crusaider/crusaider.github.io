import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, Tooltip, useColorMode } from '@chakra-ui/react';
import React, { FC } from 'react';

const ThemeToggle: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Tooltip
      hasArrow
      label={colorMode === 'light' ? 'Dark mode' : 'Light mode'}
    >
      <IconButton
        onClick={() => toggleColorMode()}
        aria-label={`choose ${colorMode === 'light' ? 'dark' : 'light'} mode`}
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      ></IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
