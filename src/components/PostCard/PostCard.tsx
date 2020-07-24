/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import * as R from 'ramda';
import { FormattedMessage, FormattedDate, defineMessages } from 'react-intl';
import { Link } from 'gatsby';

import {
  Body,
  DateAndTime,
  Image,
  ImageContainer,
  Subtitle,
  Title,
  PostCardWrapper,
} from './styled';
import { Tag, Tags } from '../Ui';
import { PostNode } from '../../types/GraphQL';
import { LOCALES, LocaleValues } from '../../types/Locales';
import { useIntl } from '@context/react-intl';

type PostCardProps = {
  postNode: PostNode;
};

const messages = defineMessages({
  [LOCALES.PT]: {
    id: 'languages.pt',
  },
  [LOCALES.EN]: {
    id: 'languages.en',
  },
});

export const PostCard: React.FC<PostCardProps> = ({ postNode }) => {
  const { formatMessage } = useIntl();
  const { frontmatter, timeToRead, fields, translations } = postNode;
  const { image, date, title, subtitle, tags } = frontmatter!;

  const shouldRenderTags = !R.pipe(R.isNil, R.isEmpty)(tags);

  function generateLanguagesText(): string {
    const firstLanguage = messages[fields?.lang as LocaleValues];

    function getPostAvailableTranslation(): null | string {
      if (!translations) return null;
      const postLang = R.head(translations)!.lang as LocaleValues;

      // TODO: FIX
      // @ts-ignore
      return messages[postLang as LocaleValues];
    }

    const languages = [firstLanguage, getPostAvailableTranslation()]
      .filter((l) => l)
      .map((l) => formatMessage(l as { id: string }))
      .join(' / ');

    return `(${languages})`;
  }

  return (
    <PostCardWrapper>
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
          />{' '}
          {generateLanguagesText()}
        </DateAndTime>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}

        {shouldRenderTags && (
          <Tags>
            {tags?.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </Tags>
        )}
      </Body>
    </PostCardWrapper>
  );
};
