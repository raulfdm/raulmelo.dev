import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import styled, { css } from 'styled-components';
import mediaQuery from 'styled-media-query';
import { Twitter, Linkedin, Github } from 'styled-icons/boxicons-logos';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  // @ts-ignore
  ${mediaQuery.greaterThan('medium')(css`
    flex-direction: row;
  `)}
`;

const ImageWrapper = styled.div`
  max-width: 8rem;
  margin-bottom: 2rem;
  // @ts-ignore
  ${mediaQuery.greaterThan('medium')(css`
    max-width: 12.8rem;
    margin-left: 4rem;
    margin-bottom: 0;
  `)}
`;

const Image = styled.img`
  border-radius: 50%;
  width: 100%;
`;

const AuthorDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.h1`
  letter-spacing: -0.93px;
  font-size: 3.6rem;
  font-family: ${({ theme }) => theme.font.contentSans};
  font-weight: 600;
`;

const AuthorSynopsis = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  font-family: ${({ theme }) => theme.font.contentSans};
`;

const SocialWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding-top: 2rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.color.fontLight};

  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 1.6rem;
  &:not(:last-child):after {
    content: '·';
    color: inherit;
    position: absolute;
    right: -0.8rem;
  }

  svg {
    color: inherit;
  }
`;

type Props = {
  className?: string;
  profilePic: string;
  name: string;
  synopsis?: string;
  github: string;
  linkedIn: string;
  twitter: string;
};

const AuthorPresentation: React.FC<Props> = ({
  className,
  profilePic,
  name,
  // synopsis,
  github,
  linkedIn,
  twitter,
}) => {
  // const intl = useIntl();

  return (
    <Wrapper className={className}>
      <AuthorDataWrapper>
        <AuthorName>{name}</AuthorName>
        {/* <AuthorSynopsis>{t('author.description', synopsis)}</AuthorSynopsis> */}
        <AuthorSynopsis>
          <FormattedMessage id="author.description" />
        </AuthorSynopsis>
        <SocialWrapper>
          {github && (
            <SocialLink href={github}>
              <Github size={21} />
            </SocialLink>
          )}
          {twitter && (
            <SocialLink href={twitter}>
              <Twitter size={21} />
            </SocialLink>
          )}
          {linkedIn && (
            <SocialLink href={linkedIn}>
              <Linkedin size={21} />
            </SocialLink>
          )}
        </SocialWrapper>
      </AuthorDataWrapper>
      <ImageWrapper>
        <Image src={profilePic} />
      </ImageWrapper>
    </Wrapper>
  );
};

export default AuthorPresentation;
