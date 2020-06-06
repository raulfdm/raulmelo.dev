import React from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import { FormattedMessage } from 'react-intl';
import { motion, AnimatePresence } from 'framer-motion';
import InfiniteScroll from 'react-infinite-scroll-component';

import { PostEdge, PostEdges } from '../../types';
import { PostCard } from '../PostCard';
import { PostFilters } from './types';
import { filterFirstSeriesPost } from './helpers/posts';

const LatestMessage = styled(motion.p)`
  letter-spacing: -0.32px;
  font-size: 2.1rem;
  font-weight: 600;
  font-family: ${({ theme }) => theme.font.contentSans};
  padding-bottom: 1.2rem;
`;

const PostList = styled.ul`
  list-style: none;
`;

export const Posts: React.FC<{
  filter: PostFilters;
  posts: PostEdges;
  loadMore: () => void;
  hasMore: boolean;
}> = ({ filter, posts, loadMore, hasMore }) => {
  if (!posts) return null;

  const filters = {
    all: {
      localeId: 'home.filter.all',
      posts,
    },
    series: {
      localeId: 'home.filter.series',
      posts: filterFirstSeriesPost(posts),
    },
    single: {
      localeId: 'home.filter.single',
      posts: posts.filter((post) => R.isNil(post.node.frontmatter?.series)),
    },
  };

  const chosenSet = filters[filter];

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
      <LatestMessage initial={{ scale: 0 }} animate={{ scale: 1 }}>
        <FormattedMessage id={chosenSet.localeId} />
      </LatestMessage>

      <PostList>
        <InfiniteScroll
          dataLength={chosenSet.posts.length}
          next={loadMore}
          hasMore={hasMore}
          loader={<></>}
        >
          <AnimatePresence initial={false}>
            {chosenSet.posts.map(({ node }: PostEdge, index) => (
              <motion.li
                key={node.id}
                custom={index}
                variants={itemsAnimationVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{
                  opacity: {
                    stiffness: 1000,
                    velocity: -200,
                  },
                }}
              >
                <PostCard postNode={node} />
              </motion.li>
            ))}
          </AnimatePresence>
        </InfiniteScroll>
      </PostList>
    </>
  );
};
