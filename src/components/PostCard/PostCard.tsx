import React from 'react';
import * as R from 'ramda';
import { FormattedMessage, FormattedDate } from 'react-intl';
import { Link } from 'gatsby';

import {
  Body,
  DateAndTime,
  Flag,
  Flags,
  Image,
  ImageContainer,
  Subtitle,
  Title,
} from './styled';
import { Card, Tag, Tags } from '../Ui';
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
  const { image, date, title, subtitle, tags } = frontmatter!;

  const shouldRenderTags = !R.pipe(R.isNil, R.isEmpty)(tags);
  const PostLangFlag = flagsMap[fields!.lang as LOCALES];
  const TranslationLangFlag = translations
    ? flagsMap[R.head(translations)!.lang as LOCALES]
    : null;

  return (
    <Card>
      {image && (
        <ImageContainer>
          <Image fluid={image.childImageSharp.fluid} />
        </ImageContainer>
      )}
      <Body>
        <Title>
          <Link to={fields!.slug} data-testid="post-card">
            {title}
          </Link>
        </Title>

        <DateAndTime>
          <time dateTime={date}>
            <FormattedDate
              value={new Date(date)}
              year="numeric"
              month="short"
              day="2-digit"
            />
          </time>{' '}
          <span>.</span>{' '}
          <FormattedMessage
            id="blog.readTime"
            values={{
              minutes: timeToRead,
            }}
          />
        </DateAndTime>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}

        {shouldRenderTags && (
          <Tags>
            {tags?.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </Tags>
        )}

        <Flags>
          <Flag>
            <PostLangFlag />
          </Flag>
          {TranslationLangFlag && (
            <Flag>
              <TranslationLangFlag />
            </Flag>
          )}
        </Flags>
      </Body>
    </Card>
  );
};
