import styled from 'styled-components';
import media from 'styled-media-query';
import { motion } from 'framer-motion';

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
  --padding: 16px;

  max-width: calc(768px - var(--padding));
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--padding);
  height: 100%;

  ${media.greaterThan('medium')`
    --padding: 24px;
  `}
`;

export const Quote = styled.blockquote`
  /* Resetting global blockquote style  */
  && {
    margin: 0;
    box-shadow: none;
  }

  text-rendering: optimizelegibility;
  padding-left: 30px;
  font-size: 26px;
  line-height: 44px;
  color: ${({ theme }) => theme.color.font};
  opacity: 0.6;
  font-family: ${({ theme }) => theme.font.contentTitle};
  letter-spacing: -0.33px;
  font-weight: 400;

  ${media.greaterThan('medium')`
    font-size: 30px;
  `}
`;
