import { motion } from 'framer-motion';

import { styled, media } from 'styles/emotion';

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

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 8px;

  && {
    margin: 16px 0 28px;
  }
`;

export const Tag = styled.li`
  background-color: var(--tag);
  border: 1px solid var(--tagHover);
  font-size: 12px;
  font-family: ${({ theme }) => theme.font.contentSans};
  border-radius: 2px;
  text-align: center;

  transition: background 0.1s ease-in-out;

  &:hover {
    background-color: var(--tagHover);
  }

  > a {
    display: inline-block;
    margin: 2px 8px;
  }
`;
