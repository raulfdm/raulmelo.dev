import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { supportedLocales } from '../../../i18n';

type HasTranslationBoxProps = {
  translatedLinks: {
    locale: string;
    slug: string;
  }[];
};

const Box = styled.div`
  border: 1px solid #e63935;
  display: block;
  margin: 3.2rem 0;
  padding: 3.2rem 4.8rem;
  width: 100%;
  font-size: 1.6rem;
`;

const HasTranslationBox = ({ translatedLinks }: HasTranslationBoxProps) => {
  const { t } = useTranslation();
  return (
    <Box>
      {translatedLinks.length < 1 ? (
        t('blog.noTranslation')
      ) : (
        <>
          <span>Tem traduções para os idiomas: </span>
          {translatedLinks.map(link => (
            <Link key={link.locale} to={link.slug}>
              {supportedLocales[link.locale].displayName}
            </Link>
          ))}
        </>
      )}
    </Box>
  );
};

export default HasTranslationBox;
