import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import rehypeReact from 'rehype-react';
import media from 'styled-media-query';

import { Quote } from '../components/Ui';
import { ThemeProvider } from '../config/theme';
import Layout from '../components/Layout';
import { BlogGlobalStyle } from '../styles/blogPost';
import { GlobalStyles } from '../styles';
import { Container } from '../components/Ui';
import { MenuBar } from '../components/MenuBar';
import { Gif } from '../components/Gif';
import { Series } from '../components/Series';
import { SeriesPostFooter } from '../components/SeriesPostFooter';
import { Frontmatter, SeriesType, PostSeries } from '../types';

const Title = styled.h1`
  font-size: 3.4rem;
  font-family: ${({ theme }) => theme.font.contentTitle};
  line-height: 1.25;
  font-weight: 400;
  font-style: normal;

  ${media.greaterThan('medium')`
    font-size: 4.2rem;
  `}
`;

const Subtitle = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 2.2rem;
  font-size: 2.4rem;
  line-height: 1.22;
  letter-spacing: -0.012em;
  font-family: ${({ theme }) => theme.font.contentSans};
  opacity: 0.54;

  ${media.greaterThan('medium')`
    font-size: 2.8rem;
  `}
`;

const StyledImg = styled(Img)`
  max-height: 400px;
  /* TODO: double check this magic number */
  margin-top: 42px;
  margin-bottom: 1.56em;

  ${media.greaterThan('medium')`
    margin-bottom: 2em;
  `}
`;

const ImgWrapper = styled(Container)`
  max-width: 1192px;
  padding-bottom: 7rem;
`;

type PostProps = {
  pageContext: {
    previousPost: PostSeries | null;
    nextPost: PostSeries | null;
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
  const { postByLocale, intl, series, previousPost, nextPost } = pageContext;

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
  const {
    image,
    title,
    subtitle,
    series: seriesInfo,
  } = frontmatter as Frontmatter;

  console.log({ previousPost, nextPost });

  return (
    <ThemeProvider>
      <GlobalStyles />
      <BlogGlobalStyle />
      <MenuBar />
      <Container as="header">
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Container>
      <Container as="section">
        {series && <Series series={series} postIndex={seriesInfo.index} />}
      </Container>

      {image && (
        <ImgWrapper>
          <StyledImg fluid={image.childImageSharp.fluid} />
        </ImgWrapper>
      )}
      <Container className="post" as="main">
        {renderAst(htmlAst)}
        <SeriesPostFooter nextPost={nextPost} previousPost={previousPost} />
      </Container>
    </ThemeProvider>
  );
};

export default Post;
