import React from 'react';
import * as R from 'ramda';

import { deepMemo } from 'utils/components';
import { CvJsonInfo } from 'graphql-types';

import { styled, css } from '../styles';
import { Section } from '../shared/Section';

const InformationWrapper = styled(Section)`
  text-align: center;

  @media print {
    padding: 0;
  }
`;

const Name = styled.h1`
  ${({ theme }) => {
    return css`
      font-size: ${theme.pxToRem(35)};

      @media screen and (min-width: ${theme.sizes.laptop}) {
        font-size: ${theme.pxToRem(40)};
      }
    `;
  }}
`;

const InfoList = styled.ul`
  display: inline-flex;
  flex-direction: column;
`;

const InfoItem = styled.li`
  :not(:last-child) {
    margin-bottom: 3px;

    @media print {
      margin-bottom: 0;
    }
  }
`;

const InfoLink = styled.a`
  ${({ theme }) => {
    return css`
      font-size: ${theme.pxToRem(16)};
      text-decoration: none;
      padding-bottom: 1px;
      border-bottom: 1px solid;

      @media screen and (min-width: ${theme.sizes.laptop}) {
        font-size: ${theme.pxToRem(18)};
      }

      @media print {
        border: none;
      }
    `;
  }}
`;

InfoLink.defaultProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
};

function normalizePhoneNumber(phone: string): string {
  return phone.replace(/\s/g, '');
}

function formatUrlToDisplay(url: string): string {
  const www = R.replace('www.', '');
  const http = R.replace('http://', '');
  const https = R.replace('https://', '');

  return R.pipe(www, http, https)(url);
}

export const Info: React.FC<{ data: CvJsonInfo }> = deepMemo(({ data }) => {
  const { name, phone, city, email, linkedIn, github } = data;

  return (
    <InformationWrapper>
      <Name>{name}</Name>
      <InfoList>
        <InfoItem>
          <InfoLink href={`tel:${normalizePhoneNumber(phone!)}`}>
            {phone}
          </InfoLink>
        </InfoItem>
        <InfoItem>
          <InfoLink href={`https://www.google.com/maps/place/${city}`}>
            {city}
          </InfoLink>
        </InfoItem>
        <InfoItem>
          <InfoLink href={`mailto:${email}`}>{email}</InfoLink>
        </InfoItem>
        <InfoItem>
          <InfoLink href={linkedIn!}>{formatUrlToDisplay(linkedIn!)}</InfoLink>
        </InfoItem>
        <InfoItem>
          <InfoLink href={github!}>{formatUrlToDisplay(github!)}</InfoLink>
        </InfoItem>
      </InfoList>
    </InformationWrapper>
  );
});
