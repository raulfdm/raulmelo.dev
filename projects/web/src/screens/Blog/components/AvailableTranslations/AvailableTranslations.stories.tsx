import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { AvailableTranslations } from './AvailableTranslations';

export default {
  title: 'Blog/AvailableTranslations',
  component: AvailableTranslations,
} as Meta;

export const defaultCase = () => (
  <AvailableTranslations
    translation={{
      language: 'pt',
      postUri: '#',
    }}
  />
);
