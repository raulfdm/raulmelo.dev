import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { CodePen } from './CodePen';

export default {
  title: 'Blog/CodePen',
  component: CodePen,
} as Meta;

export const defaultCase = () => (
  <CodePen src="https://codepen.io/raulfdm/embed/VzmoRM?height=265&theme-id=light&default-tab=result,css" />
);
