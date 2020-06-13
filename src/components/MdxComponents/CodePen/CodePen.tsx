import React from 'react';

export const CodePen: React.FC<{ src: string }> = ({ src, children }) => {
  return (
    <iframe
      height="400"
      style={{
        width: '100%',
      }}
      scrolling="no"
      title="raulfdm-position-absolute-3"
      src={src}
      frameBorder="no"
      allowTransparency
      allowFullScreen
    >
      {children}
    </iframe>
  );
};
