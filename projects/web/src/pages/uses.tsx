import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { StrapiUsesConnection } from '@app-types/graphql';
import { Layout } from '@components/Layout';
import { useIntl } from '@contexts/react-intl';

type UsesProps = {
  data: {
    allStrapiUses: StrapiUsesConnection;
  };
};

const Uses: React.FC<UsesProps> = ({ data }) => {
  const { locale } = useIntl();

  const uses = data.allStrapiUses.nodes.find((t) => t.language === locale);

  return (
    <Layout>
      <MDXRenderer>{uses!.childStrapiUsesContent!.childMdx!.body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query Uses {
    allStrapiUses {
      nodes {
        id
        language
        childStrapiUsesContent {
          childMdx {
            body
          }
        }
      }
    }
  }
`;

export default Uses;
