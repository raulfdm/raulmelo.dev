import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Divider } from './Divider';

export default {
  title: 'Blog/Divider',
  component: Divider,
} as Meta;

export const defaultCase = () => (
  <>
    <p>A text here</p>
    <Divider />
    <p>another text after divider</p>
  </>
);
