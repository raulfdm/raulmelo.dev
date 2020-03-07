const createFields = require('./createFields');
const series = require('./series');
const algolia = require('./algolia');

module.exports = {
  ...createFields,
  ...series,
  ...algolia,
};
