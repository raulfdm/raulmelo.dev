import React from 'react';
import { defineMessages } from 'react-intl';
import { observer } from 'mobx-react';

import { PostsStore } from '@screens/Home/stores';
import SEO from '@components/SEO';
import { useIntl } from '@contexts/react-intl';
import { getAndSanitizePostsFromQueryResponse } from '@screens/Home/helpers/posts';
import AuthorPresentation from '@screens/Home/components/AuthorPresentation';
import Layout from '@components/Layout';
import { Filter } from '@screens/Home/components/Filter';
import { Posts } from '@screens/Home/components/Posts';
import { PostEdges } from '@app-types';
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
    postEdges: PostEdges;
  };
};

const state = PostsStore.create({ activeFilter: 'all' });

const HomePageTemplate: React.FC<HomePageTemplateType> = observer(
  ({ pageContext }) => {
    const { locale, formatMessage } = useIntl();

    const {
      setPosts,
      postsToRender,
      activeFilter,
      loadMore,
      hasMore,
      changeFilter,
    } = state;

    React.useEffect(() => {
      const { postEdges } = pageContext;

      const posts = getAndSanitizePostsFromQueryResponse({
        postEdges,
        preferredLang: locale,
      });

      setPosts(posts);
    }, []);

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
            posts={postsToRender() as PostEdges}
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
