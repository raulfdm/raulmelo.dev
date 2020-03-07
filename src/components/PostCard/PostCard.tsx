import React from 'react';
import { FormattedMessage, FormattedDate } from 'react-intl';
import { Link } from 'gatsby';

import * as S from './styled';
import { Card } from '../Ui';
import { PostNode } from 'src/types/GraphQL';

type PostCardProps = {
  postNode: PostNode;
};

export const PostCard: React.FC<PostCardProps> = ({ postNode }) => {
  const { frontmatter, timeToRead, fields } = postNode;
  const { image, date, description, title, subtitle } = frontmatter;

  return (
    <Link to={fields.slug}>
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
