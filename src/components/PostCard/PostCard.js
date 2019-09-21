import React from 'react';
import styled from 'styled-components';

import { Card as CardWrapper } from '../ui';

const Image = styled.img`
  width: 100%;
  height: 190px;
`;

const Title = styled.h2`
  margin-top: 1.8rem;
  font-size: 3.4rem;
  font-family: ${({ theme }) => theme.font.contentSans};
  font-weight: 600;
  letter-spacing: -0.748px;
`;

const Description = styled.p`
  font-size: 2.4rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme.color.black.medium};
  font-family: ${({ theme }) => theme.font.contentSans};
  font-weight: 300;
`;

const Card = ({ image, title, description }) => {
  return (
    <CardWrapper>
      <Image src={image} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardWrapper>
  );
};

export default Card;
