import React from 'react';
import { FormattedMessage } from 'react-intl';
import { motion, AnimatePresence } from 'framer-motion';

import { InfiniteScroll } from 'components/InfiniteScroll';
import { styled } from 'styles/emotion';
import { PostEdge, PostEdges } from 'types';
import { PostCard } from 'components/PostCard';
import { PostFilters } from './types';

type PostsProps = {
  filter: PostFilters;
  posts: PostEdges;
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

export const Posts: React.FC<PostsProps> = ({
  filter,
  posts,
  loadMore,
  hasMore,
  customTitle,
}) => {
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

      <InfiniteScroll
        threshold={500}
        onLoadMore={loadMore}
        hasMore={hasMore}
        Component={PostList}
      >
        <AnimatePresence initial={false}>
          {posts.map(({ node }: PostEdge, index) => (
            <PostListItem
              key={node.id}
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
              <PostCard postNode={node} />
            </PostListItem>
          ))}
        </AnimatePresence>
      </InfiniteScroll>
    </>
  );
};
