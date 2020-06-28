const { tagTemplate } = require('../../createPages');

const singlePost = {
  api: {
    data: {
      allMdx: {
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
                tags: ['desenvolvimento', 'carreira', 'europa', 'JavaScript'],
                description: '',
              },
              fileAbsolutePath:
                '/home/raulfdm/development/medium-blog/blog/2020/03/dev-js-9/index..mdx',
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
            tags: ['desenvolvimento', 'carreira', 'europa', 'JavaScript'],
            description: '',
          },
          fileAbsolutePath:
            '/home/raulfdm/development/medium-blog/blog/2020/03/dev-js-9/index..mdx',
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
      allMdx: {
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

const tagPagePosts = {
  apiResponse: {
    data: {
      allMdx: {
        edges: [
          {
            node: {
              id: 'cf0fd974-fa9d-5369-8b7a-ec227f605b8e',
              timeToRead: 5,
              frontmatter: {
                series: null,
                title: 'Gatsby Incremental Builds and Github Actions',
                subtitle: 'A quick setup to increase your build performance',
                date: '2020-04-28',
                tags: ['front-end', 'ci/cd', 'github actions'],
                description: null,
              },
              fileAbsolutePath:
                '/home/raulfdm/development/raulmelo.dev/blog/2020/04/cache-gatsby-github-actions/index.en.mdx',
              fields: {
                slug: '/en/2020/04/cache-gatsby-github-actions',
                lang: 'en',
                commonSlug: '/2020/04/cache-gatsby-github-actions',
              },
            },
          },
          {
            node: {
              id: '72cb921b-51e1-5d82-9417-662c5f84431e',
              timeToRead: 15,
              frontmatter: {
                series: {
                  id: 'dev-js',
                },
                title: 'Desenvolvedor JavaScript — do Brasil à Europa',
                subtitle: 'Vida na Irlanda: Chegada e rotina de estudos',
                date: '2020-03-25',
                tags: ['desenvolvimento', 'carreira', 'europa', 'JavaScript'],
                description: '',
              },
              fileAbsolutePath:
                '/home/raulfdm/development/raulmelo.dev/blog/2020/03/dev-js-9/index.mdx',
              fields: {
                slug: '/2020/03/dev-js-9',
                lang: 'pt',
                commonSlug: '/2020/03/dev-js-9',
              },
            },
          },
          {
            node: {
              id: '8352f74a-d93d-59f5-83d4-97e3e3580817',
              timeToRead: 4,
              frontmatter: {
                series: null,
                title: 'YAML for Front-enders',
                subtitle:
                  'A small guide to help you write and read those files',
                date: '2020-03-19',
                tags: ['yml', 'introduction', 'front-end'],
                description: null,
              },
              fileAbsolutePath:
                '/home/raulfdm/development/raulmelo.dev/blog/2020/03/yml-for-fe/index.en.mdx',
              fields: {
                slug: '/en/2020/03/yml-for-fe',
                lang: 'en',
                commonSlug: '/2020/03/yml-for-fe',
              },
            },
          },
          {
            node: {
              id: 'aa1c8f36-f51d-5ec0-9e23-9d01c43059a4',
              timeToRead: 7,
              frontmatter: {
                series: null,
                title: 'E o coronavírus, hein?',
                subtitle:
                  'Algumas informações básicas e links para se manter informado',
                date: '2020-03-13',
                tags: ['saude', 'coronavirus', 'brasil'],
                description: '',
              },
              fileAbsolutePath:
                '/home/raulfdm/development/raulmelo.dev/blog/2020/03/13/corona-virus-overview/index.mdx',
              fields: {
                slug: '/2020/03/13/corona-virus-overview',
                lang: 'pt',
                commonSlug: '/2020/03/13/corona-virus-overview',
              },
            },
          },
        ],
      },
    },
  },
  expects: [
    {
      path: '/tags/front-end',
      component: tagTemplate,
      context: {
        postEdges: [
          {
            node: {
              id: 'cf0fd974-fa9d-5369-8b7a-ec227f605b8e',
              timeToRead: 5,
              frontmatter: {
                series: null,
                title: 'Gatsby Incremental Builds and Github Actions',
                subtitle: 'A quick setup to increase your build performance',
                date: '2020-04-28',
                tags: ['front-end', 'ci/cd', 'github actions'],
                description: null,
              },
              fileAbsolutePath:
                '/home/raulfdm/development/raulmelo.dev/blog/2020/04/cache-gatsby-github-actions/index.en.mdx',
              fields: {
                slug: '/en/2020/04/cache-gatsby-github-actions',
                lang: 'en',
                commonSlug: '/2020/04/cache-gatsby-github-actions',
              },
            },
          },
          {
            node: {
              id: '8352f74a-d93d-59f5-83d4-97e3e3580817',
              timeToRead: 4,
              frontmatter: {
                series: null,
                title: 'YAML for Front-enders',
                subtitle:
                  'A small guide to help you write and read those files',
                date: '2020-03-19',
                tags: ['yml', 'introduction', 'front-end'],
                description: null,
              },
              fileAbsolutePath:
                '/home/raulfdm/development/raulmelo.dev/blog/2020/03/yml-for-fe/index.en.mdx',
              fields: {
                slug: '/en/2020/03/yml-for-fe',
                lang: 'en',
                commonSlug: '/2020/03/yml-for-fe',
              },
            },
          },
        ],
        tag: 'front-end',
      },
    },
    {
      path: '/tags/ci-cd',
      component: tagTemplate,
      context: {
        postEdges: [
          {
            node: {
              id: 'cf0fd974-fa9d-5369-8b7a-ec227f605b8e',
              timeToRead: 5,
              frontmatter: {
                series: null,
                title: 'Gatsby Incremental Builds and Github Actions',
                subtitle: 'A quick setup to increase your build performance',
                date: '2020-04-28',
                tags: ['front-end', 'ci/cd', 'github actions'],
                description: null,
              },
              fileAbsolutePath:
                '/home/raulfdm/development/raulmelo.dev/blog/2020/04/cache-gatsby-github-actions/index.en.mdx',
              fields: {
                slug: '/en/2020/04/cache-gatsby-github-actions',
                lang: 'en',
                commonSlug: '/2020/04/cache-gatsby-github-actions',
              },
            },
          },
        ],
        tag: 'ci-cd',
      },
    },
    {
      path: '/tags/github-actions',
      component: tagTemplate,
      context: {
        postEdges: [
          {
            node: {
              id: 'cf0fd974-fa9d-5369-8b7a-ec227f605b8e',
              timeToRead: 5,
              frontmatter: {
                series: null,
                title: 'Gatsby Incremental Builds and Github Actions',
                subtitle: 'A quick setup to increase your build performance',
                date: '2020-04-28',
                tags: ['front-end', 'ci/cd', 'github actions'],
                description: null,
              },
              fileAbsolutePath:
                '/home/raulfdm/development/raulmelo.dev/blog/2020/04/cache-gatsby-github-actions/index.en.mdx',
              fields: {
                slug: '/en/2020/04/cache-gatsby-github-actions',
                lang: 'en',
                commonSlug: '/2020/04/cache-gatsby-github-actions',
              },
            },
          },
        ],
        tag: 'github-actions',
      },
    },
    {
      path: '/tags/desenvolvimento',
      component: tagTemplate,
      context: {
        postEdges: [
          {
            node: {
              id: '72cb921b-51e1-5d82-9417-662c5f84431e',
              timeToRead: 15,
              frontmatter: {
                series: {
                  id: 'dev-js',
                },
                title: 'Desenvolvedor JavaScript — do Brasil à Europa',
                subtitle: 'Vida na Irlanda: Chegada e rotina de estudos',
                date: '2020-03-25',
                tags: ['desenvolvimento', 'carreira', 'europa', 'JavaScript'],
                description: '',
              },
              fileAbsolutePath:
                '/home/raulfdm/development/raulmelo.dev/blog/2020/03/dev-js-9/index.mdx',
              fields: {
                slug: '/2020/03/dev-js-9',
                lang: 'pt',
                commonSlug: '/2020/03/dev-js-9',
              },
            },
          },
        ],
        tag: 'desenvolvimento',
      },
    },
    {
      path: '/tags/carreira',
      component: tagTemplate,
      context: {
        postEdges: [
          {
            node: {
              id: '72cb921b-51e1-5d82-9417-662c5f84431e',
              timeToRead: 15,
              frontmatter: {
                series: {
                  id: 'dev-js',
                },
                title: 'Desenvolvedor JavaScript — do Brasil à Europa',
                subtitle: 'Vida na Irlanda: Chegada e rotina de estudos',
                date: '2020-03-25',
                tags: ['desenvolvimento', 'carreira', 'europa', 'JavaScript'],
                description: '',
              },
              fileAbsolutePath:
                '/home/raulfdm/development/raulmelo.dev/blog/2020/03/dev-js-9/index.mdx',
              fields: {
                slug: '/2020/03/dev-js-9',
                lang: 'pt',
                commonSlug: '/2020/03/dev-js-9',
              },
            },
          },
        ],
        tag: 'carreira',
      },
    },
    {
      path: '/tags/europa',
      component: tagTemplate,
      context: {
        postEdges: [
          {
            node: {
              id: '72cb921b-51e1-5d82-9417-662c5f84431e',
              timeToRead: 15,
              frontmatter: {
                series: {
                  id: 'dev-js',
                },
                title: 'Desenvolvedor JavaScript — do Brasil à Europa',
                subtitle: 'Vida na Irlanda: Chegada e rotina de estudos',
                date: '2020-03-25',
                tags: ['desenvolvimento', 'carreira', 'europa', 'JavaScript'],
                description: '',
              },
              fileAbsolutePath:
                '/home/raulfdm/development/raulmelo.dev/blog/2020/03/dev-js-9/index.mdx',
              fields: {
                slug: '/2020/03/dev-js-9',
                lang: 'pt',
                commonSlug: '/2020/03/dev-js-9',
              },
            },
          },
        ],
        tag: 'europa',
      },
    },
    {
      path: '/tags/javascript',
      component: tagTemplate,
      context: {
        postEdges: [
          {
            node: {
              id: '72cb921b-51e1-5d82-9417-662c5f84431e',
              timeToRead: 15,
              frontmatter: {
                series: {
                  id: 'dev-js',
                },
                title: 'Desenvolvedor JavaScript — do Brasil à Europa',
                subtitle: 'Vida na Irlanda: Chegada e rotina de estudos',
                date: '2020-03-25',
                tags: ['desenvolvimento', 'carreira', 'europa', 'JavaScript'],
                description: '',
              },
              fileAbsolutePath:
                '/home/raulfdm/development/raulmelo.dev/blog/2020/03/dev-js-9/index.mdx',
              fields: {
                slug: '/2020/03/dev-js-9',
                lang: 'pt',
                commonSlug: '/2020/03/dev-js-9',
              },
            },
          },
        ],
        tag: 'javascript',
      },
    },
    {
      path: '/tags/yml',
      component: tagTemplate,
      context: {
        postEdges: [
          {
            node: {
              id: '8352f74a-d93d-59f5-83d4-97e3e3580817',
              timeToRead: 4,
              frontmatter: {
                series: null,
                title: 'YAML for Front-enders',
                subtitle:
                  'A small guide to help you write and read those files',
                date: '2020-03-19',
                tags: ['yml', 'introduction', 'front-end'],
                description: null,
              },
              fileAbsolutePath:
                '/home/raulfdm/development/raulmelo.dev/blog/2020/03/yml-for-fe/index.en.mdx',
              fields: {
                slug: '/en/2020/03/yml-for-fe',
                lang: 'en',
                commonSlug: '/2020/03/yml-for-fe',
              },
            },
          },
        ],
        tag: 'yml',
      },
    },
    {
      path: '/tags/introduction',
      component: tagTemplate,
      context: {
        postEdges: [
          {
            node: {
              id: '8352f74a-d93d-59f5-83d4-97e3e3580817',
              timeToRead: 4,
              frontmatter: {
                series: null,
                title: 'YAML for Front-enders',
                subtitle:
                  'A small guide to help you write and read those files',
                date: '2020-03-19',
                tags: ['yml', 'introduction', 'front-end'],
                description: null,
              },
              fileAbsolutePath:
                '/home/raulfdm/development/raulmelo.dev/blog/2020/03/yml-for-fe/index.en.mdx',
              fields: {
                slug: '/en/2020/03/yml-for-fe',
                lang: 'en',
                commonSlug: '/2020/03/yml-for-fe',
              },
            },
          },
        ],
        tag: 'introduction',
      },
    },
    {
      path: '/tags/saude',
      component: tagTemplate,
      context: {
        postEdges: [
          {
            node: {
              id: 'aa1c8f36-f51d-5ec0-9e23-9d01c43059a4',
              timeToRead: 7,
              frontmatter: {
                series: null,
                title: 'E o coronavírus, hein?',
                subtitle:
                  'Algumas informações básicas e links para se manter informado',
                date: '2020-03-13',
                tags: ['saude', 'coronavirus', 'brasil'],
                description: '',
              },
              fileAbsolutePath:
                '/home/raulfdm/development/raulmelo.dev/blog/2020/03/13/corona-virus-overview/index.mdx',
              fields: {
                slug: '/2020/03/13/corona-virus-overview',
                lang: 'pt',
                commonSlug: '/2020/03/13/corona-virus-overview',
              },
            },
          },
        ],
        tag: 'saude',
      },
    },
    {
      path: '/tags/coronavirus',
      component: tagTemplate,
      context: {
        postEdges: [
          {
            node: {
              id: 'aa1c8f36-f51d-5ec0-9e23-9d01c43059a4',
              timeToRead: 7,
              frontmatter: {
                series: null,
                title: 'E o coronavírus, hein?',
                subtitle:
                  'Algumas informações básicas e links para se manter informado',
                date: '2020-03-13',
                tags: ['saude', 'coronavirus', 'brasil'],
                description: '',
              },
              fileAbsolutePath:
                '/home/raulfdm/development/raulmelo.dev/blog/2020/03/13/corona-virus-overview/index.mdx',
              fields: {
                slug: '/2020/03/13/corona-virus-overview',
                lang: 'pt',
                commonSlug: '/2020/03/13/corona-virus-overview',
              },
            },
          },
        ],
        tag: 'coronavirus',
      },
    },
    {
      path: '/tags/brasil',
      component: tagTemplate,
      context: {
        postEdges: [
          {
            node: {
              id: 'aa1c8f36-f51d-5ec0-9e23-9d01c43059a4',
              timeToRead: 7,
              frontmatter: {
                series: null,
                title: 'E o coronavírus, hein?',
                subtitle:
                  'Algumas informações básicas e links para se manter informado',
                date: '2020-03-13',
                tags: ['saude', 'coronavirus', 'brasil'],
                description: '',
              },
              fileAbsolutePath:
                '/home/raulfdm/development/raulmelo.dev/blog/2020/03/13/corona-virus-overview/index.mdx',
              fields: {
                slug: '/2020/03/13/corona-virus-overview',
                lang: 'pt',
                commonSlug: '/2020/03/13/corona-virus-overview',
              },
            },
          },
        ],
        tag: 'brasil',
      },
    },
  ],
};

module.exports = { singlePost, twoPosts, tagPagePosts };
