import React from 'react';
import { text, select } from '@storybook/addon-knobs';

import {
  Box,
} from '..';

const colors = {
  red: 'red',
  blue: 'blue',
};

export default {
  title: 'UI / Atoms / Box',
  component: Box,
};

export const Examples = () => (
  <Box
    color={select('Color', colors, 'text')}
    border={text('Border', '1px solid black')}
    borderRight={text('Border right', '2px solid red')}
    borderTopColor={select('Border top color', colors, 'primary')}
    p={text('Paddings', '')}
    m={text('Margins', '')}
  >
    Это текст!!!
    <Box color="primary">Еще текст!!!</Box>
  </Box>
);

export const Breakpoints = () => (
  <Box
    border="1px solid black"
    pl={{
      _: 60, xs: 30, lg: 20, _2xl: 0,
    }}
    width="300px"
    height="100px"
    fontSize="14px"
  >
    Это текст!!!
  </Box>
);
