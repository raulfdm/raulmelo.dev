import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import rehypeReact from 'rehype-react';
import media from 'styled-media-query';

import { Quote } from '../components/Ui';
import { BlogGlobalStyle, pxToRem } from '../styles/blogPost';
import { GlobalStyles } from '../styles';
import { Container } from '../components/Ui';
import { MenuBar } from '../components/MenuBar';
import { Gif } from '../components/Gif';
import { Series } from '../components/Series';
import { Frontmatter, SeriesType, PostSeries, PostEdge } from '../types';

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
    nextPost: PostSeries | null;
    post: PostEdge;
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
  const { series, post } = pageContext;

  const { htmlAst, frontmatter } = post.node;
  const {
    image,
    title,
    subtitle,
    series: seriesInfo,
  } = frontmatter as Frontmatter;

  const SeriesSection: React.FC<{ noDivider?: boolean }> = ({
    noDivider = false,
  }) => {
    return (
      series && (
        <>
          {!noDivider && <hr />}
          <Container as="section">
            <Series
              series={series}
              postIndex={seriesInfo.index}
              title={title}
            />
          </Container>
        </>
      )
    );
  };

  return (
    <>
      <GlobalStyles />
      <BlogGlobalStyle />
      <MenuBar />
      <Container as="header">
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Container>
      <SeriesSection noDivider />
      {image && (
        <ImgWrapper>
          <StyledImg fluid={image.childImageSharp.fluid} />
        </ImgWrapper>
      )}
      <Container className="post" as="main">
        {renderAst(htmlAst)}
        <SeriesSection />
      </Container>
    </>
  );
};

export default Post;
