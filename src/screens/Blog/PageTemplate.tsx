import React from 'react';
import { motion } from 'framer-motion';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Header } from '@screens/Blog/components/Header';
import { FeaturedImage } from '@screens/Blog/components/FeaturedImage';
import { SeriesSection } from '@screens/Blog/components/SeriesSection';
import { BlogPostProps } from '@screens/Blog/types';
import { BlogContextProvider } from '@screens/Blog/context';
import { useTwitterScript } from 'hooks/useTwitterScript';
import LayoutBlog from '@screens/Blog/Layout';
import { pageTransitionVariants, Tags, Tag } from 'components/Ui';
import { BlogGlobalStyle } from 'styles/blogPost';
import { GlobalStyles } from 'styles/index';
import { Container, LineDivider } from 'components/Ui';
import { MenuBar } from 'components/MenuBar';
import { Frontmatter } from 'types';
import SEO from 'components/SEO';
import { ThemeProvider } from 'context/theme';
import { styled, media, SiteTheme } from 'styles/styled';
import { SideMenu } from 'components/SideMenu';
import { joinSubtitleAndDescription } from 'utils/seo';
import { AvailableTranslations } from '@screens/Blog/components/AvailableTranslations';

const Article = styled(motion.article)`
  && {
    padding-top: ${({ theme }) => `calc(35px + ${theme.sizes.menuBar.height})`};

    ${media.greaterThan('medium')`
      padding-top: ${({ theme }: { theme: SiteTheme }) =>
        `calc(35px + ${theme.sizes.menuBar.height})`};
    `}
  }
`;

const BlogPostPageTemplate: React.FC<BlogPostProps> = ({ pageContext }) => {
  useTwitterScript();

  const { series, post, translations } = pageContext;
  const { body, frontmatter, excerpt, fields } = post!.node!;
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
            value={{
              series,
              seriesInfo,
              title,
              subtitle,
              image,
              imageCaption,
              translations,
            }}
          >
            <Header />
            <AvailableTranslations />
            <SeriesSection noDivider />
            <FeaturedImage />
            <Container as="main" className="post">
              <MDXRenderer>{body!}</MDXRenderer>
              <SeriesSection />
              <LineDivider />
              <Tags>
                {tags?.map((tag) => (
                  <Tag key={tag} tag={tag} />
                ))}
              </Tags>
            </Container>
          </BlogContextProvider>
        </Article>
        <SideMenu />
      </ThemeProvider>
    </LayoutBlog>
  );
};

export default BlogPostPageTemplate;
