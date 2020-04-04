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

const messages = defineMessages({
  description: {
    id: 'siteData.description',
  },
  title: {
    id: 'siteData.title',
  },
});

export const HomeTemplate = ({ postEdges, social, author, profilePic }) => {
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
          <AuthorPresentation
            name={author}
            profilePic={profilePic}
            twitter={social.twitter}
            linkedIn={social.linkedIn}
            github={social.github}
          />
          <Filter setFilter={setFilter} currentFilter={filter} />
          <Posts posts={posts} filter={filter} />
        </main>
      </Layout>
    </>
  );
};
