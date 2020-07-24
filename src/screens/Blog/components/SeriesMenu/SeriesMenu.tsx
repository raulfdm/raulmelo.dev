import React from 'react';
import { FormattedMessage } from 'react-intl';
import { ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'gatsby';

import { Card } from '@components/Ui';
import { SeriesType, PostSeries } from 'types';
import * as S from './styled';

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
    <S.Card data-testid="series-menu">
      <S.Wrapper>
        <S.Info expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <span>{title}</span>
          <S.ExpanderButton
            initial="collapsed"
            animate={isOpen ? 'collapsed' : 'open'}
            variants={{
              open: { rotate: '0deg' },
              collapsed: { rotate: '180deg' },
            }}
          >
            <ArrowIosDownwardOutline size={21} />
          </S.ExpanderButton>
        </S.Info>
        <AnimatePresence initial={false}>
          {isOpen && (
            <S.List
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: 'auto' },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ ease: [0.4, 0, 0.2, 1] }}
            >
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
