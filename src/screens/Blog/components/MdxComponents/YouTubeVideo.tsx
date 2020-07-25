import React from 'react';

import { styled } from '@styles/styled';

const ResponsiveIframe = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 56.25%;
  position: relative;
  height: 0px;
  overflow: hidden;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;

export const YouTubeVideo: React.FC<React.HTMLProps<HTMLIFrameElement>> = ({
  src,
}) => {
  /**
   * The reasons for defining here the code from iframe-responsive
   * is because with a custom component, remark does not know what kind
   * of html element is it and puts under a paragraph <p>
   * As consequence of that, responsive-iframe plugin cannot identify this iframe
   * and does not apply the wrapper and styles for it.
   *
   * This sucks but it seems a limitation of using first remark, then react-rehype */
  return (
    <ResponsiveIframe className="gatsby-resp-iframe-wrapper">
      <Iframe
        width="560"
        height="315"
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></Iframe>
    </ResponsiveIframe>
  );
};
