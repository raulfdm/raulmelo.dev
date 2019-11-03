import { useStaticQuery, graphql } from 'gatsby';
import * as R from 'ramda';

import { Post, Edges } from '../types';

export const basicPostData = (): Array<Post> => {
  const {
    allMarkdownRemark: { edges },
  }: { allMarkdownRemark: { edges: Edges } } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
        filter: { fields: { locale: { eq: "ptBr" } } }
      ) {
        edges {
          node {
            id
            excerpt
            timeToRead
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
            }
          }
        }
      }
    }
  `);

  const posts = edges.map(
    ({ node }): Post => {
      const { id, frontmatter, fields, timeToRead } = node;
      const { date, description, title, featuredImage } = frontmatter;

      return {
        date,
        description,
        id,
        imgSrc:
          R.path(['childImageSharp', 'fluid', 'src'], featuredImage) || '',
        slug: fields.slug,
        timeToRead,
        title,
      };
    }
  );

  return posts;
};
