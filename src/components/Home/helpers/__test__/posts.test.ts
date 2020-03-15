import {
  filterFirstSeriesPost,
  getAndSanitizePostsFromQueryResponse,
} from '../posts';
import { PostEdges } from '../../../../types';
import * as data from './data';

describe('fn: filterFirstSeriesPost', () => {
  it('returns the expected data', () => {
    expect(filterFirstSeriesPost(data.filterFirstSeriesPost as PostEdges))
      .toMatchInlineSnapshot(`
      Array [
        Object {
          "node": Object {
            "frontmatter": Object {
              "date": "2017-12-11",
              "series": Object {
                "id": "dev-js",
              },
              "subtitle": "Prólogo",
              "title": "Desenvolvedor JavaScript — do Brasil à Europa",
            },
            "id": "ab7faa89-59ad-54c8-978a-0f1be5662e58",
          },
        },
        Object {
          "node": Object {
            "frontmatter": Object {
              "date": "2017-08-30",
              "series": Object {
                "id": "deploy-fe",
              },
              "subtitle": "Apresentando: Github Pages",
              "title": "Subindo seu projeto Front-end gratuitamente",
            },
            "id": "49943c66-240c-5d41-8dcc-f7b9d6afd918",
          },
        },
        Object {
          "node": Object {
            "frontmatter": Object {
              "date": "2017-05-21",
              "series": Object {
                "id": "regex",
              },
              "subtitle": "Introdução",
              "title": "Entendendo de uma vez por todas Expressões Regulares",
            },
            "id": "ad183c81-3acd-560a-99ac-229342a57864",
          },
        },
      ]
    `);
  });
});

describe('fn: getAndSanitizePostsFromQueryResponse', () => {
  it('"pt" as preferred language', () => {
    const expectedDefaultPt = [
      {
        node: {
          id: '2fff163c-8da4-5426-80c2-b6feec58b63a',
          frontmatter: {
            title: 'Subindo seu projeto Front-end gratuitamente',
          },
          fields: {
            slug: '/2019/03/netlifiy-deploy',
            lang: 'pt',
            commonSlug: '/2019/03/netlifiy-deploy',
          },
          translations: [
            {
              slug: '/en/2019/03/netlifiy-deploy',
              lang: 'en',
            },
          ],
        },
      },
      {
        node: {
          id: '4b532368-420d-5132-a3a3-5e72ef016f90',
          frontmatter: {
            title: 'Coisas que eu não sei em TI e no geral (2018)',
          },
          fields: {
            slug: '/2019/04/things-i-dont-know-2018',
            lang: 'pt',
            commonSlug: '/2019/04/things-i-dont-know-2018',
          },
        },
      },
      {
        node: {
          id: '7985b5ff-3736-51da-ab14-0dc6b5bea98e',
          frontmatter: {
            title: 'CSS Basics: Position Absolute e Relative',
          },
          fields: {
            slug: '/2018/01/css-position',
            lang: 'pt',
            commonSlug: '/2018/01/css-position',
          },
        },
      },
    ];

    expect(
      getAndSanitizePostsFromQueryResponse({
        data: data.getAndSanitizePostsFromQueryResponse as any,
        preferredLang: 'pt',
      }),
    ).toEqual(expectedDefaultPt);
  });

  it('"en" as preferred language', () => {
    const expectedDefaultPt = [
      {
        node: {
          id: '9d797b37-4086-55cf-a79b-aec3e4d6f9cf',
          frontmatter: {
            title: 'Hosting your Front-end project',
          },
          fields: {
            slug: '/en/2019/03/netlifiy-deploy',
            lang: 'en',
            commonSlug: '/2019/03/netlifiy-deploy',
          },
          translations: [
            {
              slug: '/2019/03/netlifiy-deploy',
              lang: 'pt',
            },
          ],
        },
      },
      {
        node: {
          id: '4b532368-420d-5132-a3a3-5e72ef016f90',
          frontmatter: {
            title: 'Coisas que eu não sei em TI e no geral (2018)',
          },
          fields: {
            slug: '/2019/04/things-i-dont-know-2018',
            lang: 'pt',
            commonSlug: '/2019/04/things-i-dont-know-2018',
          },
        },
      },
      {
        node: {
          id: '7985b5ff-3736-51da-ab14-0dc6b5bea98e',
          frontmatter: {
            title: 'CSS Basics: Position Absolute e Relative',
          },
          fields: {
            slug: '/2018/01/css-position',
            lang: 'pt',
            commonSlug: '/2018/01/css-position',
          },
        },
      },
    ];

    expect(
      getAndSanitizePostsFromQueryResponse({
        data: data.getAndSanitizePostsFromQueryResponse as any,
        preferredLang: 'en',
      }),
    ).toEqual(expectedDefaultPt);
  });
});
