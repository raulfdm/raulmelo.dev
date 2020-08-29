import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { YouTubeVideo } from './YouTubeVideo';

export default {
  title: 'Blog/YouTubeVideo',
  component: YouTubeVideo,
} as Meta;

export const embeddedUrl = () => (
  <YouTubeVideo src="https://www.youtube.com/embed/e_h1fHGN7Sc" />
);

export const sendingVideoId = () => <YouTubeVideo videoId="e_h1fHGN7Sc" />;
