import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';

import { styled, media, css } from 'styles/emotion';
import { tagUri } from 'utils/routing';

export const pageTransitionAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const pageTransitionVariants = {
  exit: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
  },
};

export const Card = styled.div`
  --card-border-radius: 5px;
  --card-white-space: 1.6rem;
  position: relative;
  background-color: ${({ theme }) => theme.color.background};
  border-radius: var(--card-border-radius);
  border: ${({ theme }) =>
    theme.isDarkTheme ? `1px solid ${theme.color.border}` : 'none'};
  box-shadow: ${({ theme }) =>
      theme.isDarkTheme ? 'transparent' : theme.color.shadowLight}
    0 1px 4px;
  margin-bottom: 2.4rem;
  padding: var(--card-white-space);

  ${media.greaterThan('medium')`
    --card-white-space: 2.4rem;
  `}
`;

export const Container = styled(motion.div)`
  max-width: 768px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  height: 100%;

  ${media.greaterThan('medium')`
    padding: 0;
  `}
`;

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;

  && {
    padding: 16px 0;
  }
`;

const StyledTag = styled.li`
  font-size: 14px;
  font-family: ${({ theme }) => theme.font.contentSans};
  border-radius: 2px;
  text-align: center;
  transition: font-weight 0.2s ease-in-out;

  &:hover {
    font-weight: bold;
  }

  > a {
    display: inline-block;
    margin-right: 16px;
    text-decoration: underline;
  }
`;

export const Tag: React.FC<{ tag: string }> = ({ tag }) => (
  <StyledTag>
    <Link to={tagUri(tag)}>#{tag}</Link>
  </StyledTag>
);

export const LineDivider = styled.hr`
  margin: 2rem 0;
  background-color: ${({ theme }) => theme.color.border};
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
