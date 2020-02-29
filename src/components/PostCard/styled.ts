import styled from 'styled-components';
import Img from 'gatsby-image';

export const ImageContainer = styled.div`
  position: relative;
`;

export const Image = styled(Img)`
  max-height: 210px;
  margin-bottom: 1em;
`;

export const Title = styled.h2`
  margin: 0;
  line-height: 1.12;
  font-size: 3.4rem;
  letter-spacing: -0.022em;
  line-height: 1.12;
  font-weight: 600;
  font-family: ${({ theme }) => theme.font.contentSans};
  color: ${({ theme }) => theme.color.font};
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 2.4rem;
  letter-spacing: 0px;
  line-height: 1.394;
  font-weight: 300;
  font-family: ${({ theme }) => theme.font.contentSans};
  color: ${({ theme }) => theme.color.fontLight};
`;

export const Description = styled.p`
  font-weight: 400;
  overflow-wrap: break-word;
  margin-top: 1.11em;
  font-size: 1.8rem;
  letter-spacing: -0.004em;
  font-family: ${({ theme }) => theme.font.contentSerif};
`;

export const MetaWrapper = styled.div`
  font-family: ${({ theme }) => theme.font.contentSans};
  font-size: 1.6rem;
  font-weight: 300;
  margin-top: 1em;
  color: ${({ theme }) => theme.color.font};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const MetaText = styled.p`
  margin-left: 8px;
`;
