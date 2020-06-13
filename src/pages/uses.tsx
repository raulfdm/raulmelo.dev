import React from 'react';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import { UsesQuery } from 'graphql-types';

import Layout from 'components/Layout';
import { BlogGlobalStyle } from 'styles/blogPost';
import { useIntl } from 'context/react-intl';

const StyledLayout = styled(Layout)``;

const Uses: React.FC<{ data: UsesQuery }> = ({ data }) => {
  const { locale } = useIntl();

  const content = data.allMdx.edges.find((t) => t.node.fields!.lang === locale);

  return (
    <StyledLayout>
      <BlogGlobalStyle />
      <MDXRenderer>{content!.node.body}</MDXRenderer>
    </StyledLayout>
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
