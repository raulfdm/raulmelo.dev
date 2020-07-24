import { renderHook, act } from '@testing-library/react-hooks';
import { useHomeState, UseHomeStateReturnType } from '.';

const allPosts = [
  {
    id: 1,
    node: {
      frontmatter: {
        series: {
          copy: 'test',
        },
      },
    },
  },
  {
    id: 2,
    node: {
      frontmatter: {
        series: {
          copy: 'test',
        },
      },
    },
  },
  {
    id: 3,
    node: {
      frontmatter: {},
    },
  },
  {
    id: 4,
    node: {
      frontmatter: {},
    },
  },
  {
    id: 5,
    node: {
      frontmatter: {},
    },
  },
  {
    id: 6,
    node: {
      frontmatter: {},
    },
  },
  {
    id: 7,
    node: {
      frontmatter: {},
    },
  },
  {
    id: 8,
    node: {
      frontmatter: {},
    },
  },
  {
    id: 9,
    node: {
      frontmatter: {},
    },
  },
  {
    id: 10,
    node: {
      frontmatter: {},
    },
  },
  {
    id: 11,
    node: {
      frontmatter: {},
    },
  },
  {
    id: 12,
    node: {
      frontmatter: {},
    },
  },
];

function renderHomeHook(): UseHomeStateReturnType {
  const { result } = renderHook(() => useHomeState(allPosts as any));

  return { ...result.current };
}

describe('hook: useHomeState', () => {
  it('initial filter is "all"', () => {
    const { filter } = renderHomeHook();

    expect(filter).toBe('all');
  });

  // TODO: Fix this test
  it.skip('set filter defines only post for that filter to be rendered', async () => {
    const { setFilter, postsToRender } = renderHomeHook();

    act(() => setFilter('single'));

    expect(postsToRender).toEqual([
      {
        id: 1,
        node: {
          frontmatter: {
            series: {
              copy: 'test',
            },
          },
        },
      },
      {
        id: 2,
        node: {
          frontmatter: {
            series: {
              copy: 'test',
            },
          },
        },
      },
    ]);
  });

  describe('Infinite Scroll related', () => {
    it('returns "hasMore" prop with the correct value', () => {
      const { result } = renderHook(() => useHomeState(allPosts as any));

      expect(result.current.hasMore).toBe(true);
    });

    it('returns the 5 first posts via "postsToRender"', () => {
      const { result } = renderHook(() => useHomeState(allPosts as any));

      expect(result.current.postsToRender).toMatchInlineSnapshot(`
        Array [
          Object {
            "id": 1,
            "node": Object {
              "frontmatter": Object {
                "series": Object {
                  "copy": "test",
                },
              },
            },
          },
          Object {
            "id": 2,
            "node": Object {
              "frontmatter": Object {
                "series": Object {
                  "copy": "test",
                },
              },
            },
          },
          Object {
            "id": 3,
            "node": Object {
              "frontmatter": Object {},
            },
          },
          Object {
            "id": 4,
            "node": Object {
              "frontmatter": Object {},
            },
          },
          Object {
            "id": 5,
            "node": Object {
              "frontmatter": Object {},
            },
          },
        ]
      `);
    });

    it('returns a "loadMore" function', () => {
      const { result } = renderHook(() => useHomeState(allPosts as any));

      expect(result.current).toHaveProperty('loadMore');
      expect(result.current.loadMore).toBeInstanceOf(Function);
    });

    describe('fn: loadMore', () => {
      // TODO: Fix this test
      it.skip('loads more 5 items from all data', () => {
        const { result } = renderHook(() => useHomeState(allPosts as any));
        act(() => {
          result.current.loadMore();
        });

        expect(result.current.hasMore).toBe(true);
        expect(result.current.postsToRender).toMatchInlineSnapshot(`
                  Array [
                    Object {
                      "id": 1,
                    },
                    Object {
                      "id": 2,
                    },
                    Object {
                      "id": 3,
                    },
                    Object {
                      "id": 4,
                    },
                    Object {
                      "id": 5,
                    },
                    Object {
                      "id": 6,
                    },
                    Object {
                      "id": 7,
                    },
                    Object {
                      "id": 8,
                    },
                    Object {
                      "id": 9,
                    },
                    Object {
                      "id": 10,
                    },
                  ]
              `);
      });

      it('loads til the end', () => {
        const { result } = renderHook(() => useHomeState(allPosts as any));
        act(() => {
          result.current.loadMore();
          result.current.loadMore();
        });

        expect(result.current.hasMore).toBe(false);
        expect(result.current.postsToRender).toEqual(allPosts);
      });
    });
  });

  describe('Filter related', () => {
    it('initial filter state is "all"', () => {
      const { result } = renderHook(() => useHomeState(allPosts as any));

      expect(result.current.filter).toBe('all');
      expect(result.current).toMatchInlineSnapshot(`
        Object {
          "filter": "all",
          "hasMore": true,
          "loadMore": [Function],
          "postsToRender": Array [
            Object {
              "id": 1,
              "node": Object {
                "frontmatter": Object {
                  "series": Object {
                    "copy": "test",
                  },
                },
              },
            },
            Object {
              "id": 2,
              "node": Object {
                "frontmatter": Object {
                  "series": Object {
                    "copy": "test",
                  },
                },
              },
            },
            Object {
              "id": 3,
              "node": Object {
                "frontmatter": Object {},
              },
            },
            Object {
              "id": 4,
              "node": Object {
                "frontmatter": Object {},
              },
            },
            Object {
              "id": 5,
              "node": Object {
                "frontmatter": Object {},
              },
            },
          ],
          "setFilter": [Function],
        }
      `);
    });

    it('sets the filter sent via payload', () => {
      const { result } = renderHook(() => useHomeState(allPosts as any));

      act(() => {
        result.current.setFilter('series');
      });

      expect(result.current.filter).toBe('series');
      expect(result.current).toMatchInlineSnapshot(`
        Object {
          "filter": "series",
          "hasMore": true,
          "loadMore": [Function],
          "postsToRender": Array [
            Object {
              "id": 1,
              "node": Object {
                "frontmatter": Object {
                  "series": Object {
                    "copy": "test",
                  },
                },
              },
            },
          ],
          "setFilter": [Function],
        }
      `);
    });
  });
});
