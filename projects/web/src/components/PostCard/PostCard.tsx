/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { FormattedMessage, FormattedDate, defineMessages } from 'react-intl';
import { Link } from 'gatsby';

import { Tag, Tags } from '@components/Ui';
import { LOCALES, LocaleValues } from '@app-types';
import { useIntl } from '@contexts/react-intl';
import { isNotNilNorEmpty } from '@utils/utilities';
import {
  Body,
  DateAndTime,
  Image,
  ImageContainer,
  Subtitle,
  Title,
  PostCardWrapper,
} from './styled';
import { PostInstance, PostTagsInstance } from '@stores/apiStore';

type PostCardProps = {
  post: PostInstance;
  tags?: PostTagsInstance;
};

export const PostCard: React.FC<PostCardProps> = ({ post, tags }) => {
  const { formatMessage } = useIntl();

  const {
    featuredImage,
    title,
    language,
    subtitle,
    date,
    translation,
    childStrapiPostContent: {
      childMdx: { timeToRead },
    },
    postUri,
  } = post;

  const postLanguages = React.useMemo(() => {
    const messages = defineMessages({
      [LOCALES.PT]: {
        id: 'languages.pt',
      },
      [LOCALES.EN]: {
        id: 'languages.en',
      },
    });

    function generateLanguagesText(): string {
      const firstLanguage = messages[language as LocaleValues];
      const secondLanguage = translation?.language
        ? messages[translation.language as LocaleValues]
        : null;

      const languages = [firstLanguage, secondLanguage]
        .filter((l) => l)
        .map((l) => formatMessage(l as { id: string }))
        .join(' / ');

      return `(${languages})`;
    }

    return generateLanguagesText();
  }, [language, translation]);

  return (
    <PostCardWrapper>
      {featuredImage?.childImageSharp && (
        <ImageContainer>
          <Image
            /* @ts-ignore */
            fluid={featuredImage?.childImageSharp.fluid}
            durationFadeIn={300}
          />
        </ImageContainer>
      )}
      <Body>
        <Title>
          <Link to={postUri} data-testid="post-card">
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
          {postLanguages}
        </DateAndTime>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {isNotNilNorEmpty(tags) && (
          <Tags>
            {tags!.map((tag) => (
              <Tag key={tag?.id} tag={tag?.name} slug={tag?.slug} />
            ))}
          </Tags>
        )}
      </Body>
    </PostCardWrapper>
  );
};
