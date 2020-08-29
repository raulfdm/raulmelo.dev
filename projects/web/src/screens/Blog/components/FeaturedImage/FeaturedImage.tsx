import React from 'react';
import Img from 'gatsby-image';
import { defineMessages } from 'react-intl';

import { styled } from '@styles/styled';
import { useIntl } from '@contexts/react-intl';
import { Container } from '@components/Ui';
import { isNotNilNorEmpty } from '@utils/utilities';
import { SitePageContextPostFeaturedImageChildImageSharpFluid } from '@app-types/graphql';

const StyledImg = styled(Img)`
  max-height: 600px;
  margin-top: 42px;
`;

const ImgWrapper = styled(Container)`
  && {
    max-width: 1192px;
    padding-bottom: 50px;
  }
`;

const messages = defineMessages({
  featuredImageLabel: {
    id: 'blog.featuredImage',
  },
});

type FeaturedImageProps = {
  fluid: SitePageContextPostFeaturedImageChildImageSharpFluid;
};

export const FeaturedImage: React.FC<FeaturedImageProps> = ({ fluid }) => {
  const { formatMessage } = useIntl();

  /* TODO: Fix this caption issue */
  const imageCaption = undefined;

  return isNotNilNorEmpty(fluid) ? (
    <ImgWrapper
      role="img"
      aria-label={formatMessage(messages.featuredImageLabel)}
      data-testid="featured-image-wrapper"
    >
      <StyledImg
        /* @ts-ignore */
        fluid={fluid}
        alt={imageCaption || formatMessage(messages.featuredImageLabel)}
        data-testid="featured-image"
      />
      {imageCaption && (
        <p className="img-caption" data-testid="featured-img-caption">
          {imageCaption}
        </p>
      )}
    </ImgWrapper>
  ) : null;
};
