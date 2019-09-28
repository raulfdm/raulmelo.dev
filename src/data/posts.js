/* eslint react-hooks/rules-of-hooks:0 */
import { useStaticQuery, graphql } from 'gatsby';

export const basicPostData = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
              featuredImage {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const posts = edges.map(({ node }) => {
    const { id, frontmatter, fields, timeToRead } = node;
    const { date, description, title, featuredImage } = frontmatter;

    return {
      id,
      slug: fields.slug,
      date,
      description,
      title,
      timeToRead,
      imgSrc: featuredImage?.childImageSharp?.fluid.src || '',
    };
  });

  return posts;
};
