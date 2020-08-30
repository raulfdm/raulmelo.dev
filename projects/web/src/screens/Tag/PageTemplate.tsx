import React from 'react';
import { defineMessages } from 'react-intl';

import { SEO } from '@components/SEO';
import { useIntl } from '@contexts/react-intl';
import AuthorPresentation from '@screens/Home/components/AuthorPresentation';
import { Layout } from '@components/Layout';
import { Posts } from '@screens/Home/components/Posts';
import { titleWithNameAndJobTitle } from '@utils/seo';
import { PostFilters } from '@screens/Home/types';
import { StrapiPostTags, StrapiPosts } from '@app-types/graphql';
import { useBlogPostFilters } from '@screens/Home/hooks/useBlogPostFilters';

type TagTemplateProps = {
  pageContext: {
    posts: StrapiPosts[];
    tag: StrapiPostTags;
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
  const { locale, formatMessage } = useIntl();
  const { posts, tag } = pageContext;

  const {
    hasMore,
    activeFilter,
    loadMorePosts,
    postsToRender,
  } = useBlogPostFilters(posts);

  return (
    <>
      <SEO
        url={uri}
        lang={locale}
        description={titleWithNameAndJobTitle(
          formatMessage(messages.description, { tag: tag.name }),
        )}
        title={titleWithNameAndJobTitle(
          formatMessage(messages.title, { tag: tag.name }),
        )}
      />

      <Layout>
        <main>
          <AuthorPresentation />
          <Posts
            customTitle={formatMessage(messages.title, { tag: tag.name })}
            posts={postsToRender()}
            filter={activeFilter as PostFilters}
            loadMore={() => loadMorePosts()}
            hasMore={hasMore()}
          />
        </main>
      </Layout>
    </>
  );
};

export default TagPageTemplate;
