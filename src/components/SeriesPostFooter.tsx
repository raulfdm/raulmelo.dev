import React from 'react';
import * as R from 'ramda';
import { Link } from 'gatsby-plugin-intl';
import styled from 'styled-components';

import { PostSeries } from '../types';
import { pxToRem } from '../styles/blogPost';

const LinksWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const PostLinkItem = styled.li`
  display: flex;
  align-items: center;

  &:first-child {
    a {
      padding-left: ${pxToRem(10)};
    }
  }

  &:last-child {
    text-align: right;
    a {
      padding-right: ${pxToRem(10)};
    }
  }
`;

export const SeriesPostFooter: React.FC<{
  previousPost: PostSeries | null;
  nextPost: PostSeries | null;
}> = ({ previousPost, nextPost }) => {
  if (R.isNil(previousPost) && R.isNil(nextPost)) {
    return null;
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
