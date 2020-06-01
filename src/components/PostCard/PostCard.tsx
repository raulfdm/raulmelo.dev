import React from 'react';
import * as R from 'ramda';
import { FormattedMessage, FormattedDate } from 'react-intl';
import { Link } from 'gatsby';

import * as S from './styled';
import { Card } from '../Ui';
import { PostNode } from '../../types/GraphQL';
import { BrazilFlag, UnitedKingdomFlag } from '../Icons';
import { LOCALES } from '../../types/Locales';

type PostCardProps = {
  postNode: PostNode;
};

const flagsMap = {
  [LOCALES.PT]: BrazilFlag,
  [LOCALES.EN]: UnitedKingdomFlag,
};

export const PostCard: React.FC<PostCardProps> = ({ postNode }) => {
  const { frontmatter, timeToRead, fields, translations } = postNode;
  const { image, date, description, title, subtitle } = frontmatter!;

  const PostLangFlag = flagsMap[fields!.lang as LOCALES];
  const TranslationLangFlag = translations
    ? flagsMap[R.head(translations)!.lang as LOCALES]
    : null;

  return (
    <Link to={fields!.slug} data-testid="post-card">
      <Card>
        {image && (
          <S.ImageContainer>
            <S.Image fluid={image.childImageSharp.fluid} />
          </S.ImageContainer>
        )}
        <S.Title>{title}</S.Title>
        {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
        <S.Description>{description}</S.Description>

        <S.MetaWrapper>
          <S.Flags>
            <S.Flag>
              <PostLangFlag />
            </S.Flag>
            {TranslationLangFlag && (
              <S.Flag>
                <TranslationLangFlag />
              </S.Flag>
            )}
          </S.Flags>
          <S.PostDetails>
            {date && (
              <S.MetaText>
                <FormattedDate
                  value={new Date(date)}
                  year="numeric"
                  month="short"
                  day="2-digit"
                />
              </S.MetaText>
            )}
            <S.MetaText>.</S.MetaText>
            <S.MetaText>
              <FormattedMessage
                id="blog.readTime"
                values={{
                  minutes: timeToRead,
                }}
              />
            </S.MetaText>
          </S.PostDetails>
        </S.MetaWrapper>
      </Card>
    </Link>
  );
};
