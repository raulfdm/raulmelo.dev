import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import rehypeReact from 'rehype-react';

import { Quote } from '../components/Ui';
import { ThemeProvider } from '../config/theme';
import Layout from '../components/Layout';
import { BlogGlobalStyle } from '../styles/blogPost';
import { GlobalStyles } from '../styles';
import { Container } from '../components/Ui';
import { MenuBar } from '../components/MenuBar';
import { Gif } from '../components/Gif';
import { Series } from '../components/Series';
import { Frontmatter, SeriesType } from '../types';

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
    series: SeriesType;
  };
};

/* Custom Components */
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { 'big-quote': Quote, gif: Gif },
}).Compiler;

const Post: React.FC<PostProps> = ({ pageContext }) => {
  React.useEffect(() => {
    /* This loads all widgets from twitter if exists. 
    It's loaded by html.tsx (data-testid="twitter-script")
    */
    // @ts-ignore
    if (window.twttr) {
      // @ts-ignore
      window.twttr.widgets.load();
    }
  }, []);
  const { postByLocale, intl, series } = pageContext;

  const post = postByLocale[intl.language];

  if (!post) {
    return (
      <Layout>
        <BlogGlobalStyle />
        <h1>not found</h1>
      </Layout>
    );
  }

  const { htmlAst, frontmatter } = post.node;
  const { image, title, series: seriesInfo } = frontmatter as Frontmatter;

  return (
    <ThemeProvider>
      <GlobalStyles />
      <BlogGlobalStyle />
      <MenuBar />
      <Container>
        <h1>{title}</h1>
        {series && <Series series={series} postIndex={seriesInfo.index} />}
      </Container>

      {image && (
        <ImgWrapper>
          <StyledImg fluid={image.childImageSharp.fluid} />
        </ImgWrapper>
      )}
      <Container>{renderAst(htmlAst)}</Container>
    </ThemeProvider>
  );
};

export default Post;
