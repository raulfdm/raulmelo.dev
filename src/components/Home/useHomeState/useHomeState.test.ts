import { renderHook, act } from '@testing-library/react-hooks';
import { useHomeState } from '.';

const allPosts = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
  {
    id: 9,
  },
  {
    id: 10,
  },
  {
    id: 11,
  },
  {
    id: 12,
  },
];

describe('hook: useHomeState', () => {
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
              ]
          `);
    });

    it('returns a "loadMore" function', () => {
      const { result } = renderHook(() => useHomeState(allPosts as any));

      expect(result.current).toHaveProperty('loadMore');
      expect(result.current.loadMore).toBeInstanceOf(Function);
    });

    describe('fn: loadMore', () => {
      it('loads more 5 items from all data', () => {
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
          ],
          "setFilter": [Function],
        }
      `);
    });
  });
});
