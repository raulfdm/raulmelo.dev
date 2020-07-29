import React from 'react';
import { defineMessages } from 'react-intl';

import SEO from '@components/SEO';
import { useIntl } from '@contexts/react-intl';
import { getAndSanitizePostsFromQueryResponse } from '@screens/Home/helpers/posts';
import AuthorPresentation from '@screens/Home/components/AuthorPresentation';
import Layout from '@components/Layout';
import { Posts } from '@screens/Home/components/Posts';
import { PostEdges } from '@app-types';
import { titleWithNameAndJobTitle } from '@utils/seo';
import { PostsStore } from '@screens/Home/stores';
import { PostFilters } from '@screens/Home/types';
import { observer } from 'mobx-react';

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

const state = PostsStore.create({ activeFilter: 'all' });

const TagPageTemplate: React.FC<TagTemplateProps> = observer(
  ({ pageContext, uri }) => {
    const { locale, formatMessage } = useIntl();
    const { postEdges, tag } = pageContext;
    const { setPosts, postsToRender, hasMore, activeFilter, loadMore } = state;

    React.useEffect(() => {
      const posts = getAndSanitizePostsFromQueryResponse({
        postEdges,
        preferredLang: locale,
      });

      setPosts(posts);
    }, []);

    return (
      <>
        <SEO
          url={uri}
          lang={locale}
          description={titleWithNameAndJobTitle(
            formatMessage(messages.description, { tag }),
          )}
          title={titleWithNameAndJobTitle(
            formatMessage(messages.title, { tag }),
          )}
        />

        <Layout>
          <main>
            <AuthorPresentation />
            <Posts
              customTitle={formatMessage(messages.title, { tag })}
              posts={postsToRender() as PostEdges}
              filter={activeFilter as PostFilters}
              loadMore={loadMore}
              hasMore={hasMore()}
            />
          </main>
        </Layout>
      </>
    );
  },
);

export default TagPageTemplate;
