
/*!
 * Core dependencies.
 */

var path = require('path');

/*!
 * Internal dependencies.
 */

var TodoList = require('./todo-list')
  , DataSource = require('./data-source');

/*!
 * Find and instantiate a reporter.
 *
 * @param {String} reporter name
 * @returns {Object}
 * @api private
 */

function createReporter(name) {
  var klass = null;

  try {
    klass = require('./reporters/' + path.basename(name));
  } catch(err) {
    throw new Error('Invalid reporter "' + name + '"');
  }

  return new klass;
};

/**
 * Build a todo list.
 *
 * @param {String} list name
 * @param {String|Object} reporter or reporter name
 * @param {String} data source path
 * @returns {Object} todo list
 * @api public
 */

module.exports = function(list, reporter, db) {
  var rep = null
    , list = new TodoList(list, new DataSource(db));

  if (reporter !== Object(reporter)) {
    reporter = createReporter(reporter);
  }

  reporter.observe(list);

  return list;
};
