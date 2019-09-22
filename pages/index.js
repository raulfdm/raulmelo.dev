import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AuthorPresentation from '../src/components/AuthorPresentation';

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
  .customAuthorPresentation {
    margin-bottom: 3rem;
  }
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
      <AuthorPresentation
        name="Raul de Melo"
        profilePic="https://miro.medium.com/fit/c/256/256/1*6jtMoNvX_MHslzBLP4aM9g.jpeg"
        synopsis="Developer, passionate about coding for fun, tech addicted and open-source lover ❤"
        twitter="https://twitter.com/raul_fdm"
        className="customAuthorPresentation"
      />
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
