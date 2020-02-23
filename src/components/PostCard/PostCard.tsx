import React from 'react';
import { FormattedMessage, FormattedDate } from 'gatsby-plugin-intl';
import { Link } from 'gatsby';
import { FluidObject } from 'gatsby-image';

import * as S from './styled';
import { Card } from '../Ui';

type PostCardProps = {
  title: string;
  image: FluidObject;
  description: string;
  slug: string;
  date?: string;
  timeToRead?: number;
};

/* TODO: Accept post card instead destructured props */
export const PostCard: React.FC<PostCardProps> = ({
  image,
  title,
  description,
  date,
  timeToRead,
  slug,
}) => {
  return (
    <Link to={slug}>
      <Card>
        {image && (
          <S.ImageContainer>
            <S.Image fluid={image} />
          </S.ImageContainer>
        )}
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>

        <S.MetaWrapper>
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
        </S.MetaWrapper>
      </Card>
    </Link>
  );
};
