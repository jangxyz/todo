
/**
 * List reporter. This is the default
 * reporter.
 *
 * @constructor
 */

function List() {};

/**
 * Observer a todo list.
 *
 * @param {Object}
 * @api public
 */

List.prototype.observe = function(list) {
  this.list = list;
};

/*!
 * Export `List`.
 */

module.exports = List;
