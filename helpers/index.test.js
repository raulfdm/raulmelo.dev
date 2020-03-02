const { getSeriesPost, getPreviousAndNextPostSeries } = require('.');
const { expectedSeries, postEdges } = require('./data/seriesQuery');

describe('fn: getSeriesPost', () => {
  it('group all found series', () => {
    expect(getSeriesPost(postEdges)).toEqual(expectedSeries);
  });
});

describe('fn: getPreviousAndNextPostSeries', () => {
  const data = {
    1: {
      index: 1,
      subtitle: 'no title',
      copy: 'Parte 1',
      uri: '/pt-br/2017/05/regex-part-1',
    },
    2: {
      index: 2,
      subtitle: 'Metacharacters',
      copy: 'Parte 2',
      uri: '/pt-br/2017/05/regex-part-2',
    },
    '3.1': {
      index: '3.1',
      subtitle: 'no title',
      copy: 'Parte 3.1',
      uri: '/pt-br/2017/05/regex-part-3-1',
    },
    '3.2': {
      index: '3.2',
      subtitle: 'no title',
      copy: 'Parte 3.2',
      uri: '/pt-br/2017/05/regex-part-3-2',
    },
  };

  it('returns previus null and next index 2', () => {
    expect(getPreviousAndNextPostSeries(data, 1)).toEqual({
      previousPost: null,
      nextPost: data['2'],
    });
  });

  it('returns previous index 1 and nextPost index 3.1', () => {
    expect(getPreviousAndNextPostSeries(data, 2)).toEqual({
      previousPost: data['1'],
      nextPost: data['3.1'],
    });
  });

  it('returns previous index 2 and nextPost 3.2', () => {
    expect(getPreviousAndNextPostSeries(data, '3.1')).toEqual({
      previousPost: data['2'],
      nextPost: data['3.2'],
    });
  });

  it('returns previous index 2 and nextPost null', () => {
    expect(getPreviousAndNextPostSeries(data, '3.2')).toEqual({
      previousPost: data['3.1'],
      nextPost: null,
    });
  });
});
