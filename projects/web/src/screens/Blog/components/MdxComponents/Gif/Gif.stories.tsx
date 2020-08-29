import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Gif } from './Gif';

export default {
  title: 'Blog/Gif',
  component: Gif,
} as Meta;

export const defaultCase = () => (
  <div style={{ maxWidth: 300 }}>
    <Gif src="https://media.giphy.com/media/VIQl0Wa1qwzobAfVXn/giphy.gif" />
  </div>
);

export const withCaption = () => (
  <div style={{ maxWidth: 300 }}>
    <Gif
      src="https://media.giphy.com/media/VIQl0Wa1qwzobAfVXn/giphy.gif"
      caption="Some caption for this amazing GIF"
    />
  </div>
);

export const withCustomStyles = () => (
  <Gif
    src="https://media.giphy.com/media/VIQl0Wa1qwzobAfVXn/giphy.gif"
    imgStyle={{ maxWidth: 150 }}
  />
);
