import React from 'react';
import algoliaSearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch-dom';
import styled from 'styled-components';
import { useIntl, defineMessages } from 'gatsby-plugin-intl';

import { HitAlgolia } from '../types';
import Layout from '../components/Layout';
import { algoliaConfig } from '../config/algolia';
import PostCard from '../components/PostCard';

const searchClient = algoliaSearch(
  algoliaConfig.appId!,
  algoliaConfig.searchOnlyApiKey!,
);

const SearchWrapper = styled.main`
  font-family: ${({ theme }) => theme.font.contentSans};

  .ais-SearchBox {
    padding-bottom: 1rem;
  }

  .ais-SearchBox-form {
    display: flex;
  }

  .ais-SearchBox-input {
    border: 0;
    border-bottom: 1px solid var(--border);
    font-size: 34px;
    color: var(--font);
    height: 50px;
    width: 100%;
    letter-spacing: 0;
    font-family: inherit;
    font-weight: 300;
    background-color: transparent !important;
  }

  .ais-SearchBox-reset {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 1rem 2rem;

    svg {
      fill: var(--font);
    }

    &:not([hidden]) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .ais-SearchBox-submit {
    display: none;
  }

  .ais-Hits-item {
    list-style: none;
  }
`;

const SearchBoxWrapper = styled.div`
  padding-bottom: 40px;

  /* TODO: make 20px when "mobile" */
`;

const copies = defineMessages({
  stats: {
    id: 'search.stats',
  },
  input: {
    id: 'search.input',
  },
});

const SearchPage: React.FC = () => {
  const intl = useIntl();

  return (
    <Layout>
      <SearchWrapper>
        <InstantSearch
          searchClient={searchClient}
          indexName={algoliaConfig.indexName!}
        >
          <SearchBoxWrapper>
            <SearchBox
              searchAsYouType
              autoFocus
              translations={{ placeholder: intl.formatMessage(copies.input) }}
            />
            <Stats
              translations={{
                stats(results, milliseconds) {
                  return intl.formatMessage(copies.stats, {
                    results,
                    milliseconds,
                  });
                },
              }}
            />
          </SearchBoxWrapper>

          <Hits
            hitComponent={({ hit }: { hit: HitAlgolia }) => (
              <PostCard
                description={hit.description}
                slug={hit.fields.localizedSlug}
                image={hit.image.publicURL}
                title={hit.title}
                timeToRead={hit.timeToRead}
                date={hit.date}
              />
            )}
          />
        </InstantSearch>
      </SearchWrapper>
    </Layout>
  );
};

export default SearchPage;
