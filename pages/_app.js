import React from 'react';
import App from 'next/app';

import MenuBar from '../src/components/MenuBar';
import { ThemeProvider } from '../src/config/theme';
import { Container } from '../src/components/ui';
import '../src/config/global.css';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider>
        <Container>
          <MenuBar />
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    );
  }
}
