import { useStaticQuery, graphql } from 'gatsby';

import { Post, Edges } from '../types';

/* TODO: move to types folder */
type Slug = string;
type Posts = Post[];

export const basicPostData = (): [Slug, Posts][] => {
  const {
    allMarkdownRemark: { edges },
  }: { allMarkdownRemark: { edges: Edges } } = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            id
            excerpt
            timeToRead
            fields {
              slug
              localizedSlug
            }
            frontmatter {
              date
              title
              description
              image {
                publicURL
              }
            }
          }
        }
      }
    }
  `);

  /* TODO: Filter posts by current locale  */
  const posts: Posts = edges.map(
    ({ node }): Post => {
      const { id, frontmatter, fields, timeToRead } = node;
      const { date, description, title, image } = frontmatter;

      return {
        date,
        description,
        id,
        imgSrc: image.publicURL,
        slug: fields.slug,
        localizedSlug: fields.localizedSlug,
        locale: fields.locale,
        timeToRead,
        title,
      };
    },
  );

  const postsBySlug = posts.reduce((result, current) => {
    const post = result[current.slug];

    if (!post) {
      result[current.slug] = { [current.locale]: current };
    } else {
      result[current.slug][current.locale] = current;
    }
    return result;
  }, {});

  return Object.entries(postsBySlug);
};
