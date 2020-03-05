import React from 'react';
import styled, { css } from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { SeriesType, PostSeries } from 'src/types';
import { pxToRem } from '../../styles/blogPost';
import { Card } from '../Ui';

type SeriesProps = {
  series: SeriesType;
  postIndex: Extract<PostSeries, 'index'>;
};

const SeriesWrapper = styled.div`
  margin-top: 24px;
`;

const StyledCard = styled(Card)`
  padding: 0;
`;

const Row = styled.a<{ active: boolean }>`
  text-decoration: none;
  display: flex;
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      background-color: rgba(3, 168, 124, 1);
      color: white;
    `};

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.color.border};
  }

  &:first-child {
    border-top-left-radius: var(--card-border-radius);
    border-top-right-radius: var(--card-border-radius);
  }

  &:last-child {
    border-bottom-left-radius: var(--card-border-radius);
    border-bottom-right-radius: var(--card-border-radius);
  }

  .content {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 14px;
  }
`;

const SeriesCopy = styled.p`
  font-family: ${({ theme }) => theme.font.contentSans};
  border-right: 1px solid ${({ theme }) => theme.color.border};
  width: 100%;
  max-width: 100px;
  font-size: ${pxToRem(18)};
`;

const PostSubtitle = styled.p`
  font-family: ${({ theme }) => theme.font.contentTitle};
  font-size: ${pxToRem(24)};
`;

const SectionDescription = styled.p`
  font-family: ${({ theme }) => theme.font.contentSans};
  margin-bottom: 10px;
`;

export const Series: React.FC<SeriesProps> = ({ series, postIndex }) => {
  const postSeries = Object.entries(series);

  return (
    <SeriesWrapper>
      <SectionDescription>
        <FormattedMessage id="series.sectionDescription" />
      </SectionDescription>
      <StyledCard>
        {postSeries.map(([index, post]: [string, PostSeries]) => {
          return (
            <Row key={index} href={post.uri} active={index == postIndex}>
              <SeriesCopy className="content">{post.copy}</SeriesCopy>
              <PostSubtitle className="content">{post.subtitle}</PostSubtitle>
            </Row>
          );
        })}
      </StyledCard>
    </SeriesWrapper>
  );
};
