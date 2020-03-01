import React from 'react';
import * as R from 'ramda';
import { Link } from 'gatsby-plugin-intl';

import { PostSeries } from '../types';
import styled from 'styled-components';

const LinksWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
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
          <li>
            {previousPost && (
              <Link to={previousPost.uri}>
                ← {previousPost.copy}: {previousPost.subtitle}
              </Link>
            )}
          </li>
          <li>
            {nextPost && (
              <Link to={nextPost.uri}>
                {previousPost.copy}: {nextPost.subtitle} →
              </Link>
            )}
          </li>
        </LinksWrapper>
      </nav>
    </footer>
  );
};
