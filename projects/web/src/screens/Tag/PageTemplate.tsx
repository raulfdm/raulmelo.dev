import React from 'react';
import { defineMessages } from 'react-intl';
import { observer } from 'mobx-react';

import SEO from '@components/SEO';
import { useIntl } from '@contexts/react-intl';
import AuthorPresentation from '@screens/Home/components/AuthorPresentation';
import Layout from '@components/Layout';
import { Posts } from '@screens/Home/components/Posts';
import { titleWithNameAndJobTitle } from '@utils/seo';
import { PostsStore } from '@screens/Home/stores';
import { PostFilters } from '@screens/Home/types';
import { StrapiPostTags, StrapiPosts } from '@app-types/graphql';
import { PostsInstance } from '@stores/apiStore';

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

const store = PostsStore.create({
  activeFilter: 'all',
  apiData: {},
});

const TagPageTemplate: React.FC<TagTemplateProps> = observer(
  ({ pageContext, uri }) => {
    const { locale, formatMessage } = useIntl();
    const { posts, tag } = pageContext;
    const { hasMore, activeFilter, loadMore } = store;

    React.useEffect(() => {
      store.apiData.setPosts(posts);
    }, [tag.name]);

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
              posts={store.apiData.postsList as PostsInstance}
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
