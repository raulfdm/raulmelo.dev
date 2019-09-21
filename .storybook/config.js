import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import theme from '../src/config/theme';
import '../src/config/global.css';
import './storybook.css';

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);
