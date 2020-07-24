import React from 'react';
import { defineMessages } from 'react-intl';

import { useHomeState } from '@screens/Home/hooks/useHomeState';
import SEO from '@components/SEO';
import { useIntl } from 'context/react-intl';
import { getAndSanitizePostsFromQueryResponse } from '@screens/Home/helpers/posts';
import AuthorPresentation from '@screens/Home/components/AuthorPresentation';
import Layout from '@components/Layout';
import { Filter } from '@screens/Home/components/Filter';
import { Posts } from '@screens/Home/components/Posts';
import { PostEdges } from 'types';

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

const HomePageTemplate: React.FC<HomePageTemplateType> = ({ pageContext }) => {
  const { postEdges } = pageContext;

  const { locale, formatMessage } = useIntl();

  const posts = getAndSanitizePostsFromQueryResponse({
    postEdges,
    preferredLang: locale,
  });

  const { hasMore, loadMore, postsToRender, filter, setFilter } = useHomeState(
    posts,
  );

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
        <Filter setFilter={setFilter} currentFilter={filter} />
        <Posts
          posts={postsToRender}
          filter={filter}
          loadMore={loadMore}
          hasMore={hasMore}
        />
      </Layout>
    </>
  );
};

export default HomePageTemplate;
