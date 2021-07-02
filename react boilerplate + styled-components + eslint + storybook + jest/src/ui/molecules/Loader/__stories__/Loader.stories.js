import React from 'react';
import { object } from '@storybook/addon-knobs';

import {
  Box,
  Button,
} from 'ui/atoms';

import {
  Loader,
  AbsoluteLoader,
} from '..';

export default {
  title: 'UI / Molecules / Loader',
  component: Loader,
};

export const Absolute = () => (
  <Box
    border="1px solid black"
    position="relative"
    width="300px"
    height="300px"
  >
    <AbsoluteLoader isVisible />
  </Box>
);

export const Playground = () => (
  <Box
    border="1px solid black"
    position="relative"
    width="300px"
    height="300px"
  >
    <Loader isVisible />
  </Box>
);

// TODO: Обернуть в отдельный компонент?
export const Overlay = () => (
  <Box
    border="1px solid black"
    position="relative"
    width="300px"
    height="300px"
  >
    <button onClick={() => alert('clicked')}>Click me</button>
    <Loader isVisible overlayProps={object('Overlay', {})} />
  </Box>
);
