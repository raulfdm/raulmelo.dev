import Img from 'gatsby-image';
import { styled, media } from 'styles/emotion';

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

export const Body = styled.div`
  a {
    position: relative;
    z-index: 1;
  }
`;

export const Title = styled.h3`
  margin: 0;
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

export const DateAndTime = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin: 4px 0 10px;
  color: ${({ theme }) => theme.color.font};
  font-family: ${({ theme }) => theme.font.contentSans};
  font-size: 1.4rem;
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

export const Flags = styled.div`
  display: flex;
  justify-content: end;
  position: absolute;
  right: 8px;
  bottom: 8px;
`;

export const Flag = styled.div`
  width: 24px;
  margin-left: 10px;

  svg {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
