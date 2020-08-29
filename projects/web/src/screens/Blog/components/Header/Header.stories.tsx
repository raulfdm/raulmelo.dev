import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Header } from './Header';

export default {
  title: 'Blog/Header',
  component: Header,
} as Meta;

export const onlyTitle = () => <Header title="An awesome block post title" />;

export const titleAndSubtitle = () => (
  <Header
    title="An awesome block post title"
    subtitle="A subtitle to give context"
  />
);
