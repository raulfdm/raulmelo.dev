import React, { Fragment } from 'react';
import { useBlogContext } from '../blogContext';
import { Link } from 'gatsby';
import { defineMessages, FormattedMessage } from 'react-intl';
import { useIntl } from 'context/react-intl';
import { SitePageContextTranslations } from 'graphql-types';
import { LocaleValues } from 'src/types/Locales';
import R from 'ramda';
import { Phrase, Wrapper } from './styled';

const messages = defineMessages({
  en: {
    id: 'languages.en',
  },
  pt: {
    id: 'languages.pt',
  },
});

type ExistingTranslation = {
  lang: NonNullable<SitePageContextTranslations['lang']>;
  slug: NonNullable<SitePageContextTranslations['slug']>;
};

type ExistingTranslationsList = ExistingTranslation[];

export const AvailableTranslations = () => {
  const { translations } = useBlogContext();
  const { formatMessage, switchLocale } = useIntl();

  if (R.isNil(translations)) {
    return null;
  }

  const isLastIndex = (index: number) => {
    return index === translations.length - 1;
  };

  const separator = ' • ';

  return (
    <Wrapper data-testid="blog-available-translations">
      <Phrase>
        <span>
          <FormattedMessage id="blog.availableTranslations.text" />{' '}
        </span>
        {(translations as ExistingTranslationsList).map((t, index) => (
          <Fragment key={t.slug}>
            <Link
              to={t.slug}
              onClick={() => {
                switchLocale(t.lang as LocaleValues);
              }}
              data-testid="blog-available-translations-link"
            >
              {formatMessage(messages[t.lang as LocaleValues])}
            </Link>
            {!isLastIndex(index) && separator}
          </Fragment>
        ))}
      </Phrase>
    </Wrapper>
  );
};
