import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Twitter, Linkedin, Github } from '@styled-icons/boxicons-logos';
import { useStaticQuery, graphql } from 'gatsby';

import * as S from './styled';

const AuthorPresentation: React.FC = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          profilePic
          author
          social {
            github
            linkedIn
            twitter
          }
        }
      }
    }
  `);

  const {
    author,
    profilePic,
    social: { github, linkedIn, twitter },
  } = data.site.siteMetadata;

  return (
    <S.Wrapper>
      <S.AuthorDataWrapper>
        <S.AuthorName>{author}</S.AuthorName>
        <S.AuthorSynopsis>
          <FormattedMessage id="siteData.description" />
        </S.AuthorSynopsis>
        <S.SocialWrapper>
          {github && (
            <S.SocialLink href={github}>
              <Github size={21} />
            </S.SocialLink>
          )}
          {twitter && (
            <S.SocialLink href={twitter}>
              <Twitter size={21} />
            </S.SocialLink>
          )}
          {linkedIn && (
            <S.SocialLink href={linkedIn}>
              <Linkedin size={21} />
            </S.SocialLink>
          )}
        </S.SocialWrapper>
      </S.AuthorDataWrapper>
      <S.ImageWrapper>
        <S.Image src={profilePic} />
      </S.ImageWrapper>
    </S.Wrapper>
  );
};

export default AuthorPresentation;
