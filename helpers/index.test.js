const { getSeriesPost } = require('.');
const { expectedSeries, postEdges } = require('./data/seriesQuery');

describe('fn: getSeriesPost', () => {
  it('group all found series', () => {
    expect(getSeriesPost(postEdges)).toEqual(expectedSeries);
  });
});
