/* eslint-disable no-unused-vars */
import 'mobx-react-lite/batchingForReactDom';
import React from 'react';
import { WrapRootElement } from './src/WrapRootElement';

export const wrapRootElement = ({ element }) => {
  return <WrapRootElement>{element}</WrapRootElement>;
};
