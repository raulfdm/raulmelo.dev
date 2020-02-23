import React from 'react';

import Layout from '../components/Layout';
import { BlogGlobalStyle } from '../styles/blogPost';

type PostProps = {
  pageContext: {
    postByLocale: {
      node: {
        [locale: string]: {
          title: string;
          html: string;
        };
      };
    };
    intl: {
      language: string;
    };
  };
};

const Post: React.FC<PostProps> = ({ pageContext }) => {
  const { postByLocale, intl } = pageContext;

  const post = postByLocale[intl.language];

  if (!post) {
    return (
      <Layout>
        <BlogGlobalStyle />
        <h1>not found</h1>
      </Layout>
    );
  }

  const { title, html } = post.node;

  return (
    <Layout>
      <BlogGlobalStyle />
      <h1>{title}</h1>

      <article dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export default Post;
