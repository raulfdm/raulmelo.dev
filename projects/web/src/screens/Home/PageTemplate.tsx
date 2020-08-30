import React from 'react';
import { defineMessages } from 'react-intl';

import { SEO } from '@components/SEO';
import { useIntl } from '@contexts/react-intl';
import AuthorPresentation from '@screens/Home/components/AuthorPresentation';
import { Layout } from '@components/Layout';
import { Filter } from '@screens/Home/components/Filter';
import { Posts } from '@screens/Home/components/Posts';
import { LocaleValues } from '@app-types';
import { PostFilters } from './types';
import { useBlogPostFilters } from './hooks/useBlogPostFilters';
import { StrapiPosts } from '@app-types/graphql';

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
    store: {
      posts: StrapiPosts[];
    };
  };
};

const HomePageTemplate: React.FC<HomePageTemplateType> = ({ pageContext }) => {
  const { locale, formatMessage } = useIntl();
  const { store } = pageContext;
  const {
    activeFilter,
    loadMorePosts,
    changeFilter,
    postsToRender,
    hasMore,
  } = useBlogPostFilters(store.posts);

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
          loadMore={loadMorePosts}
          hasMore={hasMore()}
        />
      </Layout>
    </>
  );
};

export default HomePageTemplate;
