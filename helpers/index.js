const createFields = require('./createFields');
const series = require('./series');
const algolia = require('./algolia');
const createPages = require('./createPages');

module.exports = {
  ...createFields,
  ...series,
  ...algolia,
  ...createPages,
};
