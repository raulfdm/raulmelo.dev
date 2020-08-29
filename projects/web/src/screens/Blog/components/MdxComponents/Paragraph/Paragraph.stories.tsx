import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Paragraph } from './Paragraph';

export default {
  title: 'Blog/Paragraph',
  component: Paragraph,
} as Meta;

export const defaultCase = () => (
  <Paragraph>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae vel eligendi
    dolorum a, reprehenderit at quidem quo, cumque nulla minus pariatur!
    Suscipit dolore perspiciatis quam provident dicta quas atque itaque!
  </Paragraph>
);
