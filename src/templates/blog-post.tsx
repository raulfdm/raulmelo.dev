import React from 'react';
import { motion } from 'framer-motion';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Header } from 'components/Blog/Header';
import { FeaturedImage } from 'components/Blog/FeaturedImage';
import { SeriesSection } from 'components/Blog/SeriesSection';
import { BlogPostProps } from 'components/Blog/types';
import { BlogContextProvider } from 'components/Blog/blogContext';
import { useTwitterScript } from 'components/Blog/useTwitterScript';
import LayoutBlog from 'layouts/blog';
import { pageTransitionVariants, Tags, Tag } from '../components/Ui';
import { BlogGlobalStyle } from '../styles/blogPost';
import { GlobalStyles } from '../styles';
import { Container, LineDivider } from '../components/Ui';
import { MenuBar } from '../components/MenuBar';
import { Frontmatter } from '../types';
import SEO from '../components/SEO';
import { ThemeProvider } from '../context/theme';
import { styled, media, SiteTheme } from 'styles/emotion';
import { SideMenu } from 'components/SideMenu';
import { joinSubtitleAndDescription } from 'utils/seo';

const Main = Container.withComponent('main');

const Article = styled(motion.article)`
  && {
    padding-top: ${({ theme }) => `calc(35px + ${theme.sizes.menuBar.height})`};

    ${media.greaterThan('medium')`
      padding-top: ${({ theme }: { theme: SiteTheme }) =>
        `calc(35px + ${theme.sizes.menuBar.height})`};
    `}
  }
`;

const BlogPost: React.FC<BlogPostProps> = ({ pageContext }) => {
  useTwitterScript();

  const { series, post } = pageContext;
  const { body, frontmatter, excerpt, fields } = post.node;
  const {
    image,
    image_caption: imageCaption,
    title,
    subtitle,
    description,
    series: seriesInfo,
    tags,
  } = frontmatter as Frontmatter;

  return (
    <LayoutBlog>
      <SEO
        title={title}
        description={joinSubtitleAndDescription(
          description || excerpt!,
          subtitle,
        )}
        lang={fields?.lang!}
        url={fields?.slug!}
        image={image?.publicURL}
        isBlogPost
      />
      <ThemeProvider>
        <MenuBar />
        <GlobalStyles />
        <BlogGlobalStyle />
        <Article
          initial="exit"
          animate="enter"
          exit="exit"
          variants={pageTransitionVariants}
        >
          <BlogContextProvider
            value={{ series, seriesInfo, title, subtitle, image, imageCaption }}
          >
            <Header />
            <SeriesSection noDivider />
            <FeaturedImage />
            <Main className="post">
              <MDXRenderer>{body!}</MDXRenderer>
              <SeriesSection />
              <LineDivider />
              <Tags>
                {tags?.map((tag) => (
                  <Tag key={tag} tag={tag} />
                ))}
              </Tags>
            </Main>
          </BlogContextProvider>
        </Article>
        <SideMenu />
      </ThemeProvider>
    </LayoutBlog>
  );
};

export default BlogPost;
