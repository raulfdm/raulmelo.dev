import React from 'react';

type GifProps = {
  src: string;
  caption?: string;
};

export const Gif: React.FC<GifProps> = ({ src, caption }) => {
  return (
    <figure className="gif-wrapper">
      <img src={src} alt={caption} width="100%" />
      <figcaption className="gif-caption">{caption}</figcaption>
    </figure>
  );
};
