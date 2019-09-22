import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import PostCard from '../src/components/PostCard';

const LatestMessage = styled.p`
  letter-spacing: -0.32px;
  font-size: 2.1rem;
  font-weight: 600;
  font-family: ${({ theme }) => theme.font.contentSans};
  padding-top: 4rem;
  padding-bottom: 1.2rem;
`;

const PageContentWrapper = styled.main`
  padding-top: 6.5rem;
`;

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3001/posts');
      const posts = await response.json();

      setPosts(posts);
    }

    fetchData();
  }, []);

  return (
    <PageContentWrapper>
      <LatestMessage>Latest</LatestMessage>
      {posts.map(post => (
        <PostCard
          key={post.id}
          description={post.description}
          title={post.title}
          image={post.imgSrc}
        />
      ))}
    </PageContentWrapper>
  );
};

export default Home;
