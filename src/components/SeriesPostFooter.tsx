import React from 'react';
import * as R from 'ramda';
import { Link } from 'gatsby-plugin-intl';

import { PostSeries } from '../types';
import styled from 'styled-components';

const LinksWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const PostLinkItem = styled.li`
  display: flex;
  align-items: center;

  &:first-child {
    a {
      padding-left: 1rem;
    }
  }

  &:last-child {
    text-align: right;
    a {
      padding-right: 1rem;
    }
  }
`;

export const SeriesPostFooter: React.FC<{
  previousPost: PostSeries | null;
  nextPost: PostSeries | null;
}> = ({ previousPost, nextPost }) => {
  if (R.isNil(previousPost) && R.isNil(nextPost)) {
    null;
  }

  return (
    <footer>
      <hr className="post-divider" />
      <nav style={{ paddingTop: '2rem' }}>
        <LinksWrapper>
          <PostLinkItem>
            {previousPost && (
              <>
                <span>← </span>
                <Link to={previousPost.uri}>
                  {previousPost.copy}: {previousPost.subtitle}
                </Link>
              </>
            )}
          </PostLinkItem>
          <PostLinkItem>
            {nextPost && (
              <>
                <Link to={nextPost.uri}>
                  {nextPost.copy}: {nextPost.subtitle}
                </Link>
                <span> →</span>
              </>
            )}
          </PostLinkItem>
        </LinksWrapper>
      </nav>
    </footer>
  );
};
