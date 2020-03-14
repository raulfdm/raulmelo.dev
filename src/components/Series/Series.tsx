import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { transparentize } from 'polished';
import { Link } from 'gatsby';
import media from 'styled-media-query';

import { SeriesType, PostSeries } from '../../types';
import { pxToRem } from '../../styles/blogPost';
import { Card } from '../Ui';

type SeriesProps = {
  series: SeriesType;
  postIndex: PostSeries['index'];
  title: string;
};

const SeriesWrapper = styled(Card)`
  margin: 24px 0;
  padding: 0;
  --common-padding: 10px 16px;
`;

const SeriesInfo = styled.div`
  margin: 0;
  padding: var(--common-padding);
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  cursor: default;
  font-weight: bold;

  font-size: ${pxToRem(18)};
  line-height: 1.4;

  ${media.greaterThan('medium')`
    font-size: ${pxToRem(20)};
  `}
`;

const SeriesList = styled.ul`
  margin: 0;
`;

const SeriesItem = styled.li`
  cursor: pointer;
  font-family: ${({ theme }) => theme.font.contentSans};

  font-size: ${pxToRem(16)};
  margin: 0;
  padding: 0;

  ${media.greaterThan('medium')`
    font-size: ${pxToRem(18)};
  `}

  &.active {
    background-color: rgba(3, 168, 124, 1);
    color: white;
  }
  &:hover:not(.active) {
    background-color: ${transparentize(0.8, 'rgba(3, 168, 124, 1)')};
  }

  &:last-child {
    border-bottom-left-radius: var(--card-border-radius);
    border-bottom-right-radius: var(--card-border-radius);
  }

  a {
    text-decoration: none;
    padding: var(--common-padding);
    display: block;
  }
`;

export const Series: React.FC<SeriesProps> = ({ series, postIndex, title }) => {
  const postSeries = Object.entries(series);

  return (
    <SeriesWrapper>
      <SeriesInfo>
        {title} (
        <FormattedMessage
          id="series.sectionDescription"
          values={{
            seriesAmount: postSeries.length,
          }}
        />
        )
      </SeriesInfo>
      <SeriesList>
        {postSeries.map(([index, post]: [string, PostSeries]) => {
          return (
            <SeriesItem
              key={index}
              className={index === postIndex.toString() ? 'active' : ''}
            >
              <Link to={post.uri}>
                {post.copy} - {post.subtitle}
              </Link>
            </SeriesItem>
          );
        })}
      </SeriesList>
    </SeriesWrapper>
  );
};
