const R = require('ramda');

const frontmatterPath = ['node', 'frontmatter'];
const seriesPath = [...frontmatterPath, 'series'];

function getSeriesPost(postEdges) {
  const hasSeries = R.path(seriesPath);
  const postsWithSeries = R.filter(hasSeries, postEdges);

  const sanatizedPosts = postsWithSeries.map((post) => {
    const seriesPostIndex = R.path([...seriesPath, 'index'], post);
    const seriesCopy = R.path([...seriesPath, 'copy'], post);

    return {
      subtitle: R.pathOr('no title', [...frontmatterPath, 'subtitle'], post),
      series_id: R.path([...seriesPath, 'id'], post),
      copy: seriesCopy,
      index: seriesPostIndex,
      uri: R.path(['node', 'fields', 'slug'], post),
    };
  });

  return sanatizedPosts.reduce((result, currentPost) => {
    const { series_id, index } = currentPost;

    const postData = R.omit(['series_id'], currentPost);

    if (result[series_id]) {
      result[series_id][index] = postData;
    } else {
      result[series_id] = {
        [index]: postData,
      };
    }
    return result;
  }, {});
}

module.exports = {
  getSeriesPost,
  seriesPath,
};
