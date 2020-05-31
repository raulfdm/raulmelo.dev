import { Gif } from './Gif';
import { BigQuote } from './BigQuote';
import { YouTubeVideo } from './YouTubeVideo';
import { Divider } from './Divider';
import { Blockquote } from './Blockquote';
import * as Headings from './Headings';
import { Paragraph } from './Paragraph';

export const blogComponents = {
  BigQuote,
  Gif,
  YouTubeVideo,
  hr: Divider,
  blockquote: Blockquote,
  p: Paragraph,
  ...Headings,
};
