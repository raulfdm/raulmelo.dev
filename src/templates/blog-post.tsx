import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { ThemeProvider } from '../config/theme';
import Layout from '../components/Layout';
import { BlogGlobalStyle } from '../styles/blogPost';
import { GlobalStyles } from '../styles';
import { Container } from '../components/Ui';
import { MenuBar } from '../components/MenuBar';

const StyledImg = styled(Img)`
  max-height: 400px;
  /* TODO: double check this magic number */
  margin-top: 42px;
`;

const ImgWrapper = styled(Container)`
  max-width: 1192px;
  padding-bottom: 7rem;
`;

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
  React.useEffect(() => {
    /* This loads all widgets from twitter if exists. 
    It's loaded by html.tsx (data-testid="twitter-script")
    */
    // @ts-ignore
    window.twttr.widgets.load();
  }, []);
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

  const { html, frontmatter } = post.node;
  const { image, title } = frontmatter;

  return (
    <ThemeProvider>
      <GlobalStyles />
      <BlogGlobalStyle />
      <MenuBar />
      <Container>
        <h1>{title}</h1>
      </Container>
      <ImgWrapper>
        <StyledImg fluid={image.childImageSharp.fluid} />
      </ImgWrapper>
      <Container>
        <article dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </ThemeProvider>
  );
};

export default Post;
