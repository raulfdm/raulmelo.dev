import React from 'react';
import { defineMessages } from 'react-intl';

import { useHomeState } from '@screens/Home/hooks/useHomeState';
import SEO from '@components/SEO';
import { useIntl } from '@context/react-intl';
import { getAndSanitizePostsFromQueryResponse } from '@screens/Home/helpers/posts';
import AuthorPresentation from '@screens/Home/components/AuthorPresentation';
import Layout from '@components/Layout';
import { Posts } from '@screens/Home/components/Posts';
import { PostEdges } from '@app-types';
import { titleWithNameAndJobTitle } from 'utils/seo';

type TagTemplateProps = {
  pageContext: {
    postEdges: PostEdges;
    tag: string;
  };
  uri: string;
};

const messages = defineMessages({
  description: {
    id: 'tag.description',
  },
  title: {
    id: 'tag.title',
  },
});

const TagPageTemplate: React.FC<TagTemplateProps> = ({ pageContext, uri }) => {
  const { postEdges, tag } = pageContext;

  const { hasMore, loadMore, postsToRender, filter } = useHomeState(postEdges);

  const { locale, formatMessage } = useIntl();

  const posts = getAndSanitizePostsFromQueryResponse({
    postEdges: postsToRender,
    preferredLang: locale,
  });

  return (
    <>
      <SEO
        url={uri}
        lang={locale}
        description={titleWithNameAndJobTitle(
          formatMessage(messages.description, { tag }),
        )}
        title={titleWithNameAndJobTitle(formatMessage(messages.title, { tag }))}
      />

      <Layout>
        <main>
          <AuthorPresentation />
          <Posts
            customTitle={formatMessage(messages.title, { tag })}
            posts={posts}
            filter={filter}
            loadMore={loadMore}
            hasMore={hasMore}
          />
        </main>
      </Layout>
    </>
  );
};

export default TagPageTemplate;
