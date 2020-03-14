import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import rehypeReact from 'rehype-react';
import media from 'styled-media-query';
import { motion } from 'framer-motion';
import { defineMessages } from 'react-intl';

import { Quote, pageTransitionVariants } from '../components/Ui';
import { BlogGlobalStyle } from '../styles/blogPost';
import { GlobalStyles } from '../styles';
import { Container } from '../components/Ui';
import { MenuBar } from '../components/MenuBar';
import { Gif } from '../components/Gif';
import { Series } from '../components/Series';
import { Frontmatter, SeriesType, PostSeries, PostEdge } from '../types';
import SEO from '../components/SEO';
import { useIntl } from '../context/react-intl';
import { YouTubeVideo } from '../components/YouTubeVideo';

const Title = styled.h1`
  font-size: 34px;
  line-height: 40px;

  ${media.greaterThan('medium')`
    font-size: 42px;
  `}
`;

const Subtitle = styled.p`
  font-size: 24px;
  line-height: 1.22;
  letter-spacing: -0.012em;
  font-family: ${({ theme }) => theme.font.contentSans};
  opacity: 0.54;

  ${media.greaterThan('medium')`
    font-size: 28px;
  `}
`;

const StyledImg = styled(Img)`
  max-height: 600px;
  margin-top: 42px;
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
  components: { 'big-quote': Quote, gif: Gif, yt: YouTubeVideo },
}).Compiler;

const messages = defineMessages({
  featuredImageLabel: {
    id: 'blog.featuredImage',
  },
});

const Post: React.FC<PostProps> = ({ pageContext }) => {
  const { formatMessage } = useIntl();
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
    image_caption: imageCaption,
    title,
    subtitle,
    description,
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
              postIndex={seriesInfo!.index}
              title={title}
            />
          </Container>
        </>
      )
    );
  };

  const pageDescription =
    description || `${title}${subtitle ? ` - ${subtitle}` : ''}`;

  return (
    <motion.div
      initial="exit"
      animate="enter"
      exit="exit"
      variants={pageTransitionVariants}
    >
      <SEO title={title} description={pageDescription} img={image?.publicURL} />
      <GlobalStyles />
      <BlogGlobalStyle />
      <MenuBar />
      <Container as="header">
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Container>
      <SeriesSection noDivider />
      {image && (
        <ImgWrapper
          role="img"
          aria-label={formatMessage(messages.featuredImageLabel)}
        >
          <StyledImg fluid={image.childImageSharp.fluid} alt={imageCaption} />
          {imageCaption && <p className="img-caption">{imageCaption}</p>}
        </ImgWrapper>
      )}
      <Container className="post" as="main">
        {renderAst(htmlAst)}
        <SeriesSection />
      </Container>
      <br />
    </motion.div>
  );
};

export default Post;
