import React from 'react';

import { deepMemo } from '@utils/components';
import { StrapiPersonalInformation, StrapiSocial } from '@app-types/graphql';
import {
  InformationWrapper,
  Name,
  InfoList,
  InfoItem,
  InfoLink,
} from './styled';

function normalizePhoneNumber(phone: string): string {
  return phone.replace(/\s/g, '');
}

type InfoProps = Pick<
  StrapiPersonalInformation,
  'city' | 'country' | 'full_name' | 'phone' | 'email'
> &
  Pick<StrapiSocial, 'github' | 'linkedIn'>;

export const Info: React.FC<InfoProps> = deepMemo(
  ({ full_name, phone, city, email, linkedIn, github, country }) => {
    const cityAndCountry = `${city}, ${country}`;

    return (
      <InformationWrapper>
        <Name>{full_name}</Name>
        <InfoList>
          <InfoItem>
            <InfoLink href={`tel:${normalizePhoneNumber(phone!)}`}>
              {phone}
            </InfoLink>
          </InfoItem>
          <InfoItem>
            <InfoLink
              href={`https://www.google.com/maps/place/${cityAndCountry}`}
            >
              {cityAndCountry}
            </InfoLink>
          </InfoItem>
          <InfoItem>
            <InfoLink href={`mailto:${email}`}>{email}</InfoLink>
          </InfoItem>
          <InfoItem>
            <InfoLink href={linkedIn?.url!}>{linkedIn?.display_name}</InfoLink>
          </InfoItem>
          <InfoItem>
            <InfoLink href={github?.url!}>{github?.display_name}</InfoLink>
          </InfoItem>
        </InfoList>
      </InformationWrapper>
    );
  },
);
