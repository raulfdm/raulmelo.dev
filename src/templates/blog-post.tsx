import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import rehypeReact from 'rehype-react';
import media from 'styled-media-query';

import { Quote } from '../components/Ui';
import { ThemeProvider } from '../config/theme';
import Layout from '../components/Layout';
import { BlogGlobalStyle, pxToRem } from '../styles/blogPost';
import { GlobalStyles } from '../styles';
import { Container } from '../components/Ui';
import { MenuBar } from '../components/MenuBar';
import { Gif } from '../components/Gif';
import { Series } from '../components/Series';
import { SeriesPostFooter } from '../components/SeriesPostFooter';
import { Frontmatter, SeriesType, PostSeries } from '../types';

const Title = styled.h1`
  font-size: ${pxToRem(34)};

  ${media.greaterThan('medium')`
    font-size: ${pxToRem(42)};
  `}
`;

const Subtitle = styled.p`
  ${pxToRem(24)}
  line-height: 1.22;
  letter-spacing: -0.012em;
  font-family: ${({ theme }) => theme.font.contentSans};
  opacity: 0.54;

  ${media.greaterThan('medium')`
    font-size: ${pxToRem(28)};
  `}
`;

const StyledImg = styled(Img)`
  max-height: 400px;
  margin-top: 42px;
  margin-bottom: 16px;

  ${media.greaterThan('medium')`
    margin-bottom: 20px;
  `}
`;

const ImgWrapper = styled(Container)`
  max-width: 1192px;
  padding-bottom: 50px;
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
    if (window.twttr?.widgets) {
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
