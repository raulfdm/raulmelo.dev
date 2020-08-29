import React from 'react';
import { defineMessages } from 'react-intl';
import { observer } from 'mobx-react';

import { PostsStoreInstance } from '@screens/Home/stores';
import { SEO } from '@components/SEO';
import { useIntl } from '@contexts/react-intl';
import AuthorPresentation from '@screens/Home/components/AuthorPresentation';
import { Layout } from '@components/Layout';
import { Filter } from '@screens/Home/components/Filter';
import { Posts } from '@screens/Home/components/Posts';
import { LocaleValues } from '@app-types';
import { PostFilters } from './types';

const messages = defineMessages({
  description: {
    id: 'siteData.description',
  },
  title: {
    id: 'siteData.title',
  },
});

type HomePageTemplateType = {
  pageContext: {
    store: PostsStoreInstance;
  };
};

const HomePageTemplate: React.FC<HomePageTemplateType> = observer(
  ({ pageContext }) => {
    const { locale, formatMessage } = useIntl();
    const { store } = pageContext;

    const {
      postsToRender,
      activeFilter,
      loadMore,
      hasMore,
      changeFilter,
    } = store;

    return (
      <>
        <SEO
          url="/"
          lang={locale}
          description={formatMessage(messages.description)}
          title={formatMessage(messages.title)}
        />

        <Layout>
          <AuthorPresentation />
          <Filter
            activeFilter={activeFilter as PostFilters}
            changeFilter={changeFilter}
          />
          <Posts
            posts={postsToRender(locale as LocaleValues)}
            filter={activeFilter as PostFilters}
            loadMore={loadMore}
            hasMore={hasMore()}
          />
        </Layout>
      </>
    );
  },
);

export default HomePageTemplate;
