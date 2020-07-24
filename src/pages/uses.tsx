import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import { UsesQuery } from '@app-types/graphql';

import Layout from '@components/Layout';
import { BlogGlobalStyle } from '@styles/blogPost';
import { useIntl } from '@context/react-intl';

const Uses: React.FC<{ data: UsesQuery }> = ({ data }) => {
  const { locale } = useIntl();

  const content = data.allMdx.edges.find((t) => t.node.fields!.lang === locale);

  return (
    <Layout>
      <BlogGlobalStyle />
      <MDXRenderer>{content!.node.body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query Uses {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
      filter: { fileAbsolutePath: { regex: "//uses//" } }
    ) {
      edges {
        node {
          id
          fields {
            lang
          }
          body
        }
      }
    }
  }
`;

export default Uses;
