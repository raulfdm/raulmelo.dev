import styled, { css } from 'styled-components';

const headingLinkStyle = css`
  cursor: text;

  &:hover {
    .copy-title-icon svg {
      visibility: visible;
    }
  }

  .copy-title-icon {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    padding-right: 4px;

    svg {
      visibility: hidden;
    }
  }
`;

export const h1 = styled.h1`
  ${headingLinkStyle};
`;

export const h2 = styled.h2`
  ${headingLinkStyle};
`;

export const h3 = styled.h3`
  ${headingLinkStyle};
`;

export const h4 = styled.h4`
  ${headingLinkStyle};
`;

export const h5 = styled.h5`
  ${headingLinkStyle};
`;

export const h6 = styled.h6`
  ${headingLinkStyle};
`;
