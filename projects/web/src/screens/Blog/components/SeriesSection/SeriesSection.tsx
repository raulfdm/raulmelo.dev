import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

import { Divider } from '@screens/Blog/components/MdxComponents/Divider';
import { Container } from '@components/Ui';
import { ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline';
import { SitePageContextSerie } from '@app-types/graphql';
import * as S from './styled';

interface SeriesSectionProps {
  currentPostId: string;
  serie: SitePageContextSerie;
  divider?: boolean;
}

export const SeriesSection: React.FC<SeriesSectionProps> = ({
  divider = false,
  serie,
  currentPostId,
}) => {
  return serie ? (
    <>
      {divider && <Divider data-testid="series-section-divider" />}
      <Container data-testid="series-section" as="section">
        <SeriesMenu serie={serie} currentPostId={currentPostId} />
      </Container>
    </>
  ) : null;
};

type SeriesMenuProps = Pick<SeriesSectionProps, 'serie' | 'currentPostId'>;

function SeriesMenu({ serie, currentPostId }: SeriesMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const { name, blogPosts } = serie!;

  return (
    <S.Card data-testid="series-menu">
      <S.Wrapper>
        <S.Info
          expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          data-testid="expand-button"
        >
          <span>{name}</span>
          <S.ExpanderButton
            initial="collapsed"
            animate={isOpen ? 'open' : 'collapsed'}
            variants={{
              open: { rotate: '0deg' },
              collapsed: { rotate: '180deg' },
            }}
          >
            <ArrowIosDownwardOutline size={21} />
          </S.ExpanderButton>
        </S.Info>
        <S.List
          animate={isOpen ? 'open' : 'collapsed'}
          variants={{
            open: { opacity: 1, height: 'auto' },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ ease: [0.4, 0, 0.2, 1] }}
          data-testid="series-post-list"
        >
          {blogPosts!.map((post) => {
            const { id, copy, uri } = post!;
            return (
              <S.Item
                key={id}
                className={id === currentPostId ? 'active' : ''}
                data-testid={`post_${id}`}
              >
                <Link to={uri!}>{copy}</Link>
              </S.Item>
            );
          })}
        </S.List>
        <S.MenuFooter expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <span>
            <FormattedMessage
              id="series.sectionDescription"
              values={{
                seriesAmount: blogPosts!.length,
              }}
            />
          </span>
        </S.MenuFooter>
      </S.Wrapper>
    </S.Card>
  );
}
