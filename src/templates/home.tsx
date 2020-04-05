import React from 'react';
import { defineMessages } from 'react-intl';

import SEO from '../components/SEO';
import { useIntl } from '../context/react-intl';
import { getAndSanitizePostsFromQueryResponse } from '../components/Home/helpers/posts';
import { PostFilters } from '../components/Home/types';
import AuthorPresentation from '../components/AuthorPresentation';
import Layout from '../components/Layout';
import { Filter } from '../components/Home/Filter';
import { Posts } from '../components/Home/Posts';
import { PostEdges } from '../types';

const messages = defineMessages({
  description: {
    id: 'siteData.description',
  },
  title: {
    id: 'siteData.title',
  },
});

type HomeTemplateType = {
  pageContext: {
    postEdges: PostEdges;
  };
};

const HomeTemplate: React.FC<HomeTemplateType> = ({ pageContext }) => {
  const { postEdges } = pageContext;

  const [filter, setFilter] = React.useState<PostFilters>('all');
  const { locale, formatMessage } = useIntl();

  const posts = getAndSanitizePostsFromQueryResponse({
    postEdges,
    preferredLang: locale,
  });

  return (
    <>
      <SEO
        url="/"
        lang={locale}
        description={formatMessage(messages.description)}
        title={formatMessage(messages.title)}
      />

      <Layout>
        <main>
          <AuthorPresentation />
          <Filter setFilter={setFilter} currentFilter={filter} />
          <Posts posts={posts} filter={filter} />
        </main>
      </Layout>
    </>
  );
};

export default HomeTemplate;
