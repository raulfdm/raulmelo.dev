import React from 'react';
import { FormattedMessage } from 'react-intl';
import { ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline';

import { Link } from 'gatsby';
import * as S from './styled';

import { SeriesType, PostSeries } from '../../../types';
import { AnimatePresence } from 'framer-motion';
import { Card } from '../../Ui';

type SeriesProps = {
  series: SeriesType;
  postIndex: PostSeries['index'];
  title: string;
};

export const SeriesMenu: React.FC<SeriesProps> = ({
  series,
  postIndex,
  title,
}) => {
  const postSeries = Object.entries(series);
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <S.Card>
      <S.Wrapper>
        <S.Info expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <span>{title}</span>
          <S.ExpanderButton expanded={isOpen}>
            <ArrowIosDownwardOutline size={21} />
          </S.ExpanderButton>
        </S.Info>
        <AnimatePresence initial={false}>
          {isOpen && (
            <S.List>
              {postSeries.map(([index, post]: [string, PostSeries]) => {
                return (
                  <S.Item
                    key={index}
                    className={index === postIndex.toString() ? 'active' : ''}
                  >
                    <Link to={post.uri}>
                      {post.copy} - {post.subtitle}
                    </Link>
                  </S.Item>
                );
              })}
            </S.List>
          )}
        </AnimatePresence>
        <S.MenuFooter expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <span>
            <FormattedMessage
              id="series.sectionDescription"
              values={{
                seriesAmount: postSeries.length,
              }}
            />
          </span>
        </S.MenuFooter>
      </S.Wrapper>
    </S.Card>
  );
};
