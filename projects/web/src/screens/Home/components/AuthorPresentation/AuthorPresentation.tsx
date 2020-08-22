import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Twitter, Linkedin, Github } from '@styled-icons/boxicons-logos';
import { useStaticQuery, graphql } from 'gatsby';

import {
  AuthorPresentationWrapper,
  AuthorDataWrapper,
  AuthorName,
  AuthorSynopsis,
  SocialWrapper,
  SocialLink,
  Image,
} from './styled';
import { StrapiSocial, StrapiPersonalInformation } from '@app-types/graphql';

export type QueryProps = {
  strapiPersonalInformation: Pick<
    StrapiPersonalInformation,
    'full_name' | 'profile_pic'
  >;
  strapiSocial: Pick<StrapiSocial, 'linkedIn' | 'github' | 'twitter'>;
};

const query = graphql`
  {
    strapiPersonalInformation {
      full_name
      profile_pic {
        childImageSharp {
          fixed(quality: 100, width: 128, height: 128) {
            # This fragment has a bug
            # https://github.com/graphql/graphiql/issues/612
            # https://github.com/gatsbyjs/gatsby/issues/13723
            # ...GatsbyImageSharpFixed
            base64
            width
            height
            src
            srcSet
          }
        }
      }
    }
    strapiSocial {
      linkedIn {
        url
      }
      github {
        url
      }
      twitter {
        url
      }
    }
  }
`;

const AuthorPresentation: React.FC = () => {
  const data: QueryProps = useStaticQuery(query);

  const {
    strapiPersonalInformation: { full_name, profile_pic },
    strapiSocial: { linkedIn, github, twitter },
  } = data;

  return (
    <AuthorPresentationWrapper>
      <AuthorDataWrapper>
        <AuthorName data-testid="author__name">{full_name}</AuthorName>
        <AuthorSynopsis data-testid="author__description">
          <FormattedMessage id="siteData.description" />
        </AuthorSynopsis>
        <SocialWrapper>
          {github && (
            <SocialLink href={github.url!} data-testid="author__githubUrl">
              <Github size={21} />
            </SocialLink>
          )}
          {twitter && (
            <SocialLink href={twitter.url!} data-testid="author__twitterUrl">
              <Twitter size={21} />
            </SocialLink>
          )}
          {linkedIn && (
            <SocialLink href={linkedIn.url!} data-testid="author__linkedInUrl">
              <Linkedin size={21} />
            </SocialLink>
          )}
        </SocialWrapper>
      </AuthorDataWrapper>
      <Image
        /* @ts-ignore */
        fixed={profile_pic!.childImageSharp?.fixed}
        width={120}
        height={120}
      />
    </AuthorPresentationWrapper>
  );
};

export default AuthorPresentation;
