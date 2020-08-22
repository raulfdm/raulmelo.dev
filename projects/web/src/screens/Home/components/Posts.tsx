import React from 'react';
import * as R from 'ramda';
import { FormattedMessage, defineMessages } from 'react-intl';
import { motion, AnimatePresence } from 'framer-motion';

import { InfiniteScroll } from '@components/InfiniteScroll';
import { styled } from '@styles/styled';
import { PostCard } from '@components/PostCard';
import { PostFilters } from '@screens/Home/types';
import { PostTagsInstance, PostsInstance } from '@stores/apiStore';
import { useIntl } from '@contexts/react-intl';
import { LocaleValues, LOCALES } from '@app-types';

type PostsProps = {
  filter: PostFilters;
  posts: PostsInstance;
  loadMore: () => void;
  hasMore: boolean;
  customTitle?: string;
};

const PostsTitle = styled.h2`
  letter-spacing: -0.32px;
  font-size: 2.1rem;
  font-weight: 600;
  font-family: ${({ theme }) => theme.font.contentSans};
  padding-bottom: 1.2rem;
`;

const PostList = styled.ul`
  list-style: none;
`;

const PostListItem = styled(motion.li)`
  margin-bottom: 3rem;
`;

const NoPostsMessage = styled.p`
  font-size: 1.6rem;
  line-height: 24px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.font.contentSans};
`;

const messages = defineMessages({
  [LOCALES.PT]: {
    id: 'languages.pt',
  },
  [LOCALES.EN]: {
    id: 'languages.en',
  },
});

export const Posts: React.FC<PostsProps> = ({
  filter,
  posts,
  loadMore,
  hasMore,
  customTitle,
}) => {
  const { locale, formatMessage } = useIntl();

  if (!posts) return null;

  const filterLocale = {
    all: 'home.filter.all',
    series: 'home.filter.series',
    single: 'home.filter.single',
  };

  const itemsAnimationVariants = {
    visible: (index: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: index * 0.1,
      },
    }),
    hidden: {
      scale: 0,
      opacity: 0,
    },
  };

  return (
    <>
      <PostsTitle>
        {customTitle || <FormattedMessage id={filterLocale[filter]} />}
      </PostsTitle>

      {R.isEmpty(posts) ? (
        <NoPostsMessage>
          <FormattedMessage
            id="home.noPosts"
            values={{
              language: formatMessage(messages[locale as LocaleValues]),
            }}
          />
        </NoPostsMessage>
      ) : (
        <InfiniteScroll
          threshold={500}
          onLoadMore={loadMore}
          hasMore={hasMore}
          Component={PostList}
        >
          <AnimatePresence initial={false}>
            {posts.map((post, index) => (
              <PostListItem
                key={post.id}
                custom={index}
                variants={itemsAnimationVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{
                  opacity: {
                    stiffness: 1000,
                    velocity: -100,
                  },
                }}
              >
                <PostCard post={post} tags={post.tags as PostTagsInstance} />
              </PostListItem>
            ))}
          </AnimatePresence>
        </InfiniteScroll>
      )}
    </>
  );
};
