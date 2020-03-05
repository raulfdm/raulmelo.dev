const { getSeriesPost, getPreviousAndNextPostSeries } = require('.');
const { postEdges } = require('./data/seriesQuery');

describe('fn: getSeriesPost', () => {
  it('group all found series', () => {
    expect(getSeriesPost(postEdges)).toMatchInlineSnapshot(`
      Object {
        "dev-js": Object {
          "0": Object {
            "copy": "Ato 1",
            "index": 0,
            "subtitle": "Prólogo",
            "uri": "/pt-br/2017/12/dev-js-part-1",
          },
          "1": Object {
            "copy": "Ato 2",
            "index": 1,
            "subtitle": "Matrix Origins: Onde tudo começou",
            "uri": "/pt-br/2017/12/dev-js-part-2",
          },
          "2": Object {
            "copy": "Ato 3 1/2",
            "index": 2,
            "subtitle": "O que você quer ser quando crescer? Colegial",
            "uri": "/pt-br/2017/12/dev-js-part-3",
          },
          "3": Object {
            "copy": "Ato 3 2/2",
            "index": 3,
            "subtitle": "O que você quer ser quando crescer? Pós Ensino Médio",
            "uri": "/pt-br/2018/01/dev-js-3-2",
          },
        },
      }
    `);
  });
});

describe('fn: getPreviousAndNextPostSeries', () => {
  const data = {
    '0': {
      copy: 'Ato 1',
      index: 0,
      subtitle: 'Prólogo',
      uri: '/pt-br/2017/12/dev-js-part-1',
    },
    '1': {
      copy: 'Ato 2',
      index: 1,
      subtitle: 'Matrix Origins: Onde tudo começou',
      uri: '/pt-br/2017/12/dev-js-part-2',
    },
    '2': {
      copy: 'Ato 3 1/2',
      index: 2,
      subtitle: 'O que você quer ser quando crescer? Colegial',
      uri: '/pt-br/2017/12/dev-js-part-3',
    },
    '3': {
      copy: 'Ato 3 2/2',
      index: 3,
      subtitle: 'O que você quer ser quando crescer? Pós Ensino Médio',
      uri: '/pt-br/2018/01/dev-js-3-2',
    },
  };

  it('returns previus null and next index 1', () => {
    expect(getPreviousAndNextPostSeries(data, 0)).toEqual({
      previousPost: null,
      nextPost: data['1'],
    });
  });

  it('returns previous index 0 and nextPost index 2', () => {
    expect(getPreviousAndNextPostSeries(data, 1)).toEqual({
      previousPost: data['0'],
      nextPost: data['2'],
    });
  });

  it('returns previous index 1 and nextPost 3', () => {
    expect(getPreviousAndNextPostSeries(data, 2)).toEqual({
      previousPost: data['1'],
      nextPost: data['3'],
    });
  });

  it('returns previous index 2 and nextPost null', () => {
    expect(getPreviousAndNextPostSeries(data, '3')).toEqual({
      previousPost: data['2'],
      nextPost: null,
    });
  });
});
