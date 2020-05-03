import React from 'react';
import { FormattedMessage } from 'react-intl';
import { motion } from 'framer-motion';

import styled, { css } from 'styled-components';
import { PostFilters } from './types';

const FilterNav = styled.nav`
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  margin-bottom: 30px;
`;
const FilterList = styled.ul`
  display: flex;
`;

const activeStyles = css`
  color: ${({ theme }) => theme.color.font};
  border-bottom: 1px solid ${({ theme }) => theme.color.font};
`;

const FilterItem = styled(motion.li)<{ active?: boolean }>`
  padding-right: 20px;
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

export const Filter: React.FC<{
  currentFilter: PostFilters;
  setFilter(nextFilter: PostFilters): void;
}> = ({ currentFilter, setFilter }) => {
  const variants = {
    active: {
      scale: 1.1,
    },
  };

  return (
    <FilterNav>
      <FilterList>
        <FilterItem
          onClick={() => setFilter('all')}
          active={currentFilter === 'all'}
          variants={variants}
          whileHover={currentFilter !== 'all' ? 'active' : ''}
        >
          <p>
            <FormattedMessage id="home.filter.all" />
          </p>
        </FilterItem>
        <FilterItem
          onClick={() => setFilter('single')}
          active={currentFilter === 'single'}
          variants={variants}
          whileHover={currentFilter !== 'single' ? 'active' : ''}
        >
          <p>
            <FormattedMessage id="home.filter.single" />
          </p>
        </FilterItem>
        <FilterItem
          onClick={() => setFilter('series')}
          active={currentFilter === 'series'}
          variants={variants}
          whileHover={currentFilter !== 'series' ? 'active' : ''}
        >
          <p>
            <FormattedMessage id="home.filter.series" />
          </p>
        </FilterItem>
      </FilterList>
    </FilterNav>
  );
};
