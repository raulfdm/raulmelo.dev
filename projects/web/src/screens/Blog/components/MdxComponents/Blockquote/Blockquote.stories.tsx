import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Blockquote } from './Blockquote';

export default {
  title: 'Blog/Blockquote',
  component: Blockquote,
} as Meta;

export const defaultCase = () => (
  <div style={{ padding: 16 }}>
    <Blockquote>Some block quote in here</Blockquote>
  </div>
);
