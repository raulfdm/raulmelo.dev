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
  margin-bottom: 5px;
  line-height: 1.3;
  font-size: 2rem;
  font-weight: 600;
  font-family: ${({ theme }) => theme.font.contentSans};
  color: ${({ theme }) => theme.color.font};

  ${media.greaterThan('medium')`
    font-size: 3rem;
    line-height: 1.12;
    letter-spacing: -0.022em;
  `}
`;

export const Subtitle = styled.p`
  margin: 0;
  line-height: 1.3;
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.font.contentSans};
  color: ${({ theme }) => theme.color.fontLight};

  ${media.greaterThan('medium')`
    font-size: 2.2rem;
  `}
`;

export const Description = styled.p`
  font-weight: 400;
  overflow-wrap: break-word;
  font-size: 1.4rem;
  font-family: ${({ theme }) => theme.font.contentSerif};
  margin-top: 16px;

  ${media.greaterThan('medium')`
    font-size: 1.8rem;
    margin-top: 18px;
  `}
`;

export const MetaWrapper = styled.div`
  font-family: ${({ theme }) => theme.font.contentSans};
  font-size: 1.4rem;
  margin-top: 1em;
  color: ${({ theme }) => theme.color.font};
  display: flex;
  justify-content: space-between;

  ${media.greaterThan('medium')`
    margin-top: 1em;
  `}
`;

export const PostDetails = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const MetaText = styled.p`
  margin-left: 8px;
`;

export const Flags = styled.div`
  display: flex;
`;

export const Flag = styled.div`
  width: 24px;
  margin-right: 10px;

  svg {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
