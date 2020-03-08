import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Twitter, Linkedin, Github } from '@styled-icons/boxicons-logos';

import * as S from './styled';

type Props = {
  className?: string;
  github: string;
  linkedIn: string;
  name: string;
  profilePic: string;
  synopsis?: string;
  twitter: string;
};

const AuthorPresentation: React.FC<Props> = ({
  className,
  github,
  linkedIn,
  name,
  profilePic,
  twitter,
}) => {
  return (
    <S.Wrapper className={className}>
      <S.AuthorDataWrapper>
        <S.AuthorName>{name}</S.AuthorName>
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
