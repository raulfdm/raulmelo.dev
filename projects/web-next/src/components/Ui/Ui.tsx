import { styled, media, css } from '@styles/styled';

// export const Container = styled(motion.div)`
export const Container = styled.div`
  max-width: 768px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  height: 100%;

  ${media.greaterThan('medium')`
    padding: 0;
  `}
`;

export const headingLinkStyle = css`
  cursor: text;
  display: inline-block;

  &:hover {
    .copy-title-icon svg {
      visibility: visible;
    }
  }

  .copy-title-icon {
    position: absolute;
    top: -2px;
    right: -28px;
    padding-left: 4px;

    svg {
      visibility: hidden;
    }
  }
`;
