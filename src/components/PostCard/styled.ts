import styled from 'styled-components';

export const ImageContainer = styled.div`
  position: relative;
  padding-bottom: 30%;
`;

export const Image = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: #fff;
  padding: 1rem;
`;

export const Title = styled.h2`
  margin-top: 1.8rem;
  font-size: 3.4rem;
  font-family: ${({ theme }) => theme.font.contentSans};
  font-weight: 600;
  color: ${({ theme }) => theme.color.font};
  letter-spacing: -0.748px;
`;

export const Description = styled.p`
  font-size: 2.4rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme.color.fontLight};
  font-family: ${({ theme }) => theme.font.contentSans};
  font-weight: 300;
`;

export const MetaWrapper = styled.div`
  font-family: ${({ theme }) => theme.font.contentSans};
  font-size: 1.6rem;
  font-weight: 300;
  color: ${({ theme }) => theme.color.font};

  display: flex;

  margin-top: 2rem;
  justify-content: flex-end;
  align-items: center;
`;

export const MetaText = styled.p`
  margin-left: 8px;
`;
