/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import React from 'react';
import { motion } from 'framer-motion';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { AvailableTranslations } from '@screens/Blog/components/AvailableTranslations';
import { BlogContextProvider } from '@screens/Blog/context';
import { Container, LineDivider } from '@components/Ui';
import { FeaturedImage } from '@screens/Blog/components/FeaturedImage';
import { Header } from '@screens/Blog/components/Header';
import { joinSubtitleAndDescription } from '@utils/seo';
import { MenuBar } from '@components/MenuBar';
import { pageTransitionVariants, Tags, Tag } from '@components/Ui';
import { SeriesSection } from '@screens/Blog/components/SeriesSection';
import { SideMenu } from '@components/SideMenu';
import { styled, media, SiteTheme } from '@styles/styled';
import { useTwitterScript } from '@hooks/useTwitterScript';
import LayoutBlog from '@screens/Blog/Layout';
import { BlogThemeProvider } from '@screens/Blog/styles/themeProvider';
import { SEO } from '@components/SEO';
import { BlogPostPageContext } from './types';
import { SitePageContextPostFeaturedImageChildImageSharpFluid } from '@app-types/graphql';

const Article = styled(motion.article)`
  && {
    padding-top: ${({ theme }) => `calc(35px + ${theme.sizes.menuBar.height})`};

    ${media.greaterThan('medium')`
      padding-top: ${({ theme }: { theme: SiteTheme }) =>
        `calc(35px + ${theme.sizes.menuBar.height})`};
    `}
  }
`;

const BlogPostPageTemplate: React.FC<{
  pageContext: BlogPostPageContext;
}> = ({ pageContext }) => {
  useTwitterScript();

  const { post, postUri, serie, translation } = pageContext;

  const {
    title,
    subtitle,
    description,
    language,
    tags,
    featuredImage,
    childStrapiPostContent,
  } = post;

  const { body, excerpt } = childStrapiPostContent.childMdx!;

  return (
    <LayoutBlog>
      <SEO
        title={title!}
        description={joinSubtitleAndDescription(
          description || excerpt!,
          subtitle,
        )}
        lang={language!}
        url={postUri!}
        image={featuredImage?.childImageSharp!.original!.src}
        isBlogPost
      />
      <BlogThemeProvider>
        <MenuBar />
        <Article
          initial="exit"
          animate="enter"
          exit="exit"
          variants={pageTransitionVariants}
        >
          <BlogContextProvider
            value={{
              serie,
              post,
              translation,
            }}
          >
            <Header title={post.title!} subtitle={post.subtitle} />
            <AvailableTranslations translation={translation} />
            <SeriesSection currentPostId={post.id} serie={serie!} />
            <FeaturedImage
              fluid={
                post.featuredImage?.childImageSharp!.fluid as NonNullable<
                  SitePageContextPostFeaturedImageChildImageSharpFluid
                >
              }
            />
            <Container as="main" className="post">
              <MDXRenderer>{body!}</MDXRenderer>
              <SeriesSection divider currentPostId={post.id} serie={serie!} />
              <LineDivider />
              {tags && (
                <Tags>
                  {tags.map((tag) => {
                    const { id, name, slug } = tag!;
                    return <Tag key={id} tag={name!} slug={slug!} />;
                  })}
                </Tags>
              )}
            </Container>
          </BlogContextProvider>
        </Article>
        <SideMenu />
      </BlogThemeProvider>
    </LayoutBlog>
  );
};

export default BlogPostPageTemplate;
