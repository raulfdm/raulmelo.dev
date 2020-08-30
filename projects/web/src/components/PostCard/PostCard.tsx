/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { FormattedMessage, FormattedDate } from 'react-intl';
import { Link } from 'gatsby';

import { Tag, Tags } from '@components/Ui';
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
import { PostModel } from '@models/Post';
import { StrapiPosts } from '@app-types/graphql';

type PostCardProps = {
  post: PostModel;
  tags?: StrapiPosts['post_tags'];
};

export const PostCard: React.FC<PostCardProps> = ({ post, tags }) => {
  const {
    featured_image,
    title,
    subtitle,
    date,
    childStrapiPostContent,
    postUri,
  } = post!;

  const { timeToRead } = childStrapiPostContent!.childMdx!;

  return (
    <PostCardWrapper>
      {featured_image?.childImageSharp && (
        <ImageContainer>
          <Image
            /* @ts-ignore */
            fluid={featured_image?.childImageSharp.fluid}
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
              minutes: timeToRead!,
            }}
          />{' '}
        </DateAndTime>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {isNotNilNorEmpty(tags) && (
          <Tags>
            {tags!.map((tag) => {
              const { id, name, slug } = tag!;
              return <Tag key={id} tag={name!} slug={slug!} />;
            })}
          </Tags>
        )}
      </Body>
    </PostCardWrapper>
  );
};
