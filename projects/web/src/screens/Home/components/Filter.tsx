import React from 'react';
import { FormattedMessage } from 'react-intl';
import { motion } from 'framer-motion';

import { css, styled } from '@styles/styled';

const FilterList = styled.ul`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, max-content);

  && {
    border-bottom: 1px solid ${({ theme }) => theme.color.border};
    margin-bottom: 30px;
  }
`;

const activeStyles = css`
  color: ${({ theme }) => theme.color?.font};
  border-bottom: 1px solid ${({ theme }) => theme.color?.font};
`;

const FilterItem = styled(motion.li)<{ active?: boolean }>`
  font-size: 14px;
  font-family: ${({ theme }) => theme.font.contentSans};
  color: ${({ theme }) => theme.color.fontLight};
  cursor: pointer;

  p {
    border: none;
    padding-bottom: 8px;
    ${({ active }) => active && activeStyles};
    transition: border-width 0.6s linear;
  }

  &:hover {
    color: ${({ theme }) => theme.color.font};
  }
`;

type Filters = 'all' | 'single' | 'series';

type FilterProps = {
  activeFilter: Filters;
  changeFilter: (nextFilter: Filters) => void;
};

export const Filter: React.FC<FilterProps> = ({
  activeFilter,
  changeFilter,
}) => {
  const variants = {
    active: {
      scale: 1.1,
    },
  };

  return (
    <FilterList>
      <FilterItem
        onClick={() => changeFilter('all')}
        active={activeFilter === 'all'}
        variants={variants}
        whileHover={activeFilter !== 'all' ? 'active' : ''}
      >
        <p>
          <FormattedMessage id="home.filter.all" />
        </p>
      </FilterItem>
      <FilterItem
        onClick={() => changeFilter('single')}
        active={activeFilter === 'single'}
        variants={variants}
        whileHover={activeFilter !== 'single' ? 'active' : ''}
      >
        <p>
          <FormattedMessage id="home.filter.single" />
        </p>
      </FilterItem>
      <FilterItem
        onClick={() => changeFilter('series')}
        active={activeFilter === 'series'}
        variants={variants}
        whileHover={activeFilter !== 'series' ? 'active' : ''}
      >
        <p>
          <FormattedMessage id="home.filter.series" />
        </p>
      </FilterItem>
    </FilterList>
  );
};
