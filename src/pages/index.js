import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import AuthorPresentation from '../components/AuthorPresentation';
import PostCard from '../components/PostCard';

import { basicPostData } from '../data/posts';

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
  const posts = basicPostData();
  console.log({ posts });

  return (
    <Layout>
      <PageContentWrapper>
        <AuthorPresentation
          className="customAuthorPresentation"
          name="Raul de Melo"
          profilePic="https://miro.medium.com/fit/c/256/256/1*6jtMoNvX_MHslzBLP4aM9g.jpeg"
          synopsis="Developer, passionate about coding for fun, tech addicted and open-source lover ❤"
          twitter="https://twitter.com/raul_fdm"
          linkedIn="https://www.linkedin.com/in/raulfdm/"
          github="https://github.com/raulfdms"
        />
        <LatestMessage>Latest</LatestMessage>
        {posts.map(post => {
          return (
            <PostCard
              key={post.id}
              description={post.description}
              title={post.title}
              date={post.date}
              timeToRead={post.timeToRead}
              image={post.imgSrc}
            />
          );
        })}
      </PageContentWrapper>
    </Layout>
  );
};

export default Home;
