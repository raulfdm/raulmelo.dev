import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { BigQuote } from './BigQuote';

export default {
  title: 'Blog/BigQuote',
  component: BigQuote,
} as Meta;

export const defaultCase = () => (
  <BigQuote>"Some impactful message right here"</BigQuote>
);
