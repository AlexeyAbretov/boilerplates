
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from 'styled-components';

import { theme } from '../src/ui/theme'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const themes = [
  {
    name: 'Default theme',
    ...theme
  },
  
];

addDecorator(withThemesProvider(themes, ThemeProvider));

addDecorator(withKnobs);
