import styled from 'styled-components';
import Img from 'gatsby-image';
import media from 'styled-media-query';

export const ImageContainer = styled.div`
  position: relative;
  margin: calc(var(--card-white-space) * -1);
  margin-bottom: var(--card-white-space);
  border-top-left-radius: var(--card-border-radius);
  border-top-right-radius: var(--card-border-radius);
`;

export const Image = styled(Img)`
  max-height: 200px;
  margin-bottom: 1em;
  border-top-left-radius: var(--card-border-radius);
  border-top-right-radius: var(--card-border-radius);

  ${media.greaterThan('medium')`
    max-height: 270px;
  `}
`;

export const Title = styled.h2`
  margin: 0;
  line-height: 1;
  font-size: 2rem;
  font-weight: 600;
  font-family: ${({ theme }) => theme.font.contentSans};
  color: ${({ theme }) => theme.color.font};

  ${media.greaterThan('medium')`
    font-size: 3.4rem;
    line-height: 1.12;
    letter-spacing: -0.022em;
  `}
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 1.8rem;
  font-weight: 300;
  font-family: ${({ theme }) => theme.font.contentSans};
  color: ${({ theme }) => theme.color.fontLight};

  ${media.greaterThan('medium')`
    font-size: 2.4rem;
    letter-spacing: 0px;
    line-height: 1.394;
  `}
`;

export const Description = styled.p`
  font-weight: 400;
  overflow-wrap: break-word;
  margin-top: 1.11em;
  font-size: 1.6rem;
  letter-spacing: -0.004em;
  font-family: ${({ theme }) => theme.font.contentSerif};
  margin-top: 0.8rem;

  ${media.greaterThan('medium')`
    font-size: 1.8rem;
    margin-top: 1.2rem;
  `}
`;

export const MetaWrapper = styled.div`
  font-family: ${({ theme }) => theme.font.contentSans};
  font-size: 1.4rem;
  font-weight: 300;
  margin-top: 1em;
  color: ${({ theme }) => theme.color.font};
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${media.greaterThan('medium')`
    margin-top: 1em;
    font-size: 1.6rem;
  `}
`;

export const MetaText = styled.p`
  margin-left: 8px;
`;
