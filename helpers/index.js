const R = require('ramda');

const frontmatterPath = ['node', 'frontmatter'];
const seriesPath = [...frontmatterPath, 'series'];

function getSeriesPost(postEdges) {
  const hasSeries = R.path(seriesPath);
  const postsWithSeries = R.filter(hasSeries, postEdges);

  const sanatizedPosts = postsWithSeries.map((post) => ({
    subtitle: R.pathOr([...frontmatterPath, 'subtitle'], post, 'no title'),
    series_id: R.path([...seriesPath, 'id'], post),
    copy: R.path([...seriesPath, 'copy'], post),
    index: R.path([...seriesPath, 'index'], post),
    uri: R.path(['node', 'fields', 'localizedSlug'], post),
  }));

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
