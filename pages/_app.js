import React from 'react';
import styled from 'styled-components';
import App from 'next/app';

import { ThemeProvider } from '../src/config/theme';
import { ContainerCss } from '../src/components/ui';
import '../src/config/global.css';

const Layout = styled.div`
  ${ContainerCss}
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}
