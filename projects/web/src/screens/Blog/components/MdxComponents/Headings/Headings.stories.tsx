import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';

import { h1, h2, h3, h4, h5, h6 } from './Headings';

const CopyLinkWithIcon = () => (
  <a
    href="#table-of-content"
    aria-label="table of content permalink"
    className="copy-title-icon before"
  >
    <svg
      aria-hidden="true"
      height="20"
      version="1.1"
      viewBox="0 0 16 16"
      width="20"
    >
      <path
        fill="currentColor"
        d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
      ></path>
    </svg>
  </a>
);

export default {
  title: 'Blog/Headings',
} as Meta;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const allHeadings = () => {
  return (
    <Column>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
    </Column>
  );
};

export const withCopyLinkIcon = () => {
  return (
    <Column>
      <h1>
        Heading 1
        <CopyLinkWithIcon />
      </h1>
      <h2>
        Heading 2
        <CopyLinkWithIcon />
      </h2>
      <h3>
        Heading 3
        <CopyLinkWithIcon />
      </h3>
      <h4>
        Heading 4
        <CopyLinkWithIcon />
      </h4>
      <h5>
        Heading 5<CopyLinkWithIcon />
      </h5>
      <h6>
        Heading 6
        <CopyLinkWithIcon />
      </h6>
    </Column>
  );
};
