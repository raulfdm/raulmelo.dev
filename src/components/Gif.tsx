import React from 'react';
import styled from 'styled-components';

type GifProps = {
  src: string;
  caption?: string;
  imgstyle?: string;
};

export const Gif: React.FC<GifProps> = ({ src, caption, imgstyle }) => {
  const Figure = styled.figure`
    ${imgstyle}
    margin: 0 auto;
  `;

  return (
    <Figure className="gif-wrapper">
      <img src={src} alt={caption} width="100%" style={{ margin: 0 }} />
      <figcaption className="gif-caption">{caption}</figcaption>
    </Figure>
  );
};
