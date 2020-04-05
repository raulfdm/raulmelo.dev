const singlePost = {
  api: {
    data: {
      allMarkdownRemark: {
        edges: [
          {
            node: {
              id: '489f6fe2-7c4e-5779-936d-4a39050693c3',
              timeToRead: 18,
              frontmatter: {
                series: {
                  id: 'dev-js',
                },
                title: 'Desenvolvedor JavaScript — do Brasil à Europa',
                subtitle: 'Vida na Irlanda: Chegada e rotina de estudos',
                date: '2020-03-25',
                categories: [
                  'desenvolvimento',
                  'carreira',
                  'europa',
                  'JavaScript',
                ],
                description: '',
              },
              fileAbsolutePath:
                '/home/raulfdm/development/medium-blog/blog/2020/03/dev-js-9/index.md',
              fields: {
                slug: '/2020/03/dev-js-9',
                lang: 'pt',
                commonSlug: '/2020/03/dev-js-9',
              },
            },
          },
        ],
      },
    },
  },
  expect: {
    edges: [
      {
        node: {
          id: '489f6fe2-7c4e-5779-936d-4a39050693c3',
          timeToRead: 18,
          frontmatter: {
            series: {
              id: 'dev-js',
            },
            title: 'Desenvolvedor JavaScript — do Brasil à Europa',
            subtitle: 'Vida na Irlanda: Chegada e rotina de estudos',
            date: '2020-03-25',
            categories: ['desenvolvimento', 'carreira', 'europa', 'JavaScript'],
            description: '',
          },
          fileAbsolutePath:
            '/home/raulfdm/development/medium-blog/blog/2020/03/dev-js-9/index.md',
          fields: {
            slug: '/2020/03/dev-js-9',
            lang: 'pt',
            commonSlug: '/2020/03/dev-js-9',
          },
        },
      },
    ],
    yearCase: '/2020',
    yearMonthCase: '/2020/03',
  },
};

const twoPosts = {
  api: {
    data: {
      allMarkdownRemark: {
        edges: [
          {
            node: {
              id: 'ad183c81-3acd-560a-99ac-229342a57864',
              frontmatter: {
                title: 'Entendendo de uma vez por todas Expressões Regulares',
                date: '2017-05-21',
              },
            },
          },
          {
            node: {
              id: '36485c1e-394c-5b09-a0cd-ae9adfd6a19c',

              frontmatter: {
                title: 'Entendendo de uma vez por todas Expressões Regulares',
                date: '2018-06-06',
              },
            },
          },
        ],
      },
    },
  },
  expect: {
    posts: [
      {
        yearCase: '/2017',
        yearMonthCase: '/2017/05',
        edges: [
          {
            node: {
              id: 'ad183c81-3acd-560a-99ac-229342a57864',
              frontmatter: {
                title: 'Entendendo de uma vez por todas Expressões Regulares',
                date: '2017-05-21',
              },
            },
          },
        ],
      },
      {
        yearCase: '/2018',
        yearMonthCase: '/2018/06',
        edges: [
          {
            node: {
              id: '36485c1e-394c-5b09-a0cd-ae9adfd6a19c',

              frontmatter: {
                title: 'Entendendo de uma vez por todas Expressões Regulares',
                date: '2018-06-06',
              },
            },
          },
        ],
      },
    ],
  },
};

module.exports = { singlePost, twoPosts };
