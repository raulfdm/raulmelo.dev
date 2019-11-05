import { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { LocaleContext } from '../utils/LocaleContext';

type Node = {
  name: string;
  childLocalesJson: object;
};

type Edge = {
  node: Node;
};

const query = graphql`
  query useTranslations {
    rawData: allFile(filter: { sourceInstanceName: { eq: "locales" } }) {
      edges {
        node {
          name
          childLocalesJson {
            blog {
              noTranslation
              readTime
              readTime_plural
            }
            home {
              latest
            }
            author {
              description
            }
          }
        }
      }
    }
  }
`;

export const useTranslation = () => {
  const { locale } = useContext(LocaleContext);
  const { rawData } = useStaticQuery(query);

  /* TODO: Fix this any later */
  const simplifiedData = rawData.edges.reduce((result: any, edge: Edge) => {
    result[edge.node.name] = edge.node.childLocalesJson;
    return result;
  }, {});

  return simplifiedData[locale];
};
