import React from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

type GifProps = {
  src: string;
  caption?: string;
  imgStyle?: string;
};

const Figure = styled.figure<{ extraStyles?: FlattenSimpleInterpolation }>`
  ${({ extraStyles }) => extraStyles};
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const Gif: React.FC<GifProps> = ({ src, caption, imgStyle }) => {
  return (
    <Figure
      className="gif-wrapper"
      extraStyles={css`
        ${imgStyle};
      `}
      data-testid="gif-figure"
    >
      <img
        src={src}
        alt={caption}
        style={{ margin: 0, width: '100%' }}
        data-testid="gif-image"
      />
      {caption && (
        <figcaption className="gif-caption" data-testid="gif-figcaption">
          {caption}
        </figcaption>
      )}
    </Figure>
  );
};
