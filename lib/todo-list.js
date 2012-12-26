
/**
 * Represent a todo list. It's a simple collection
 * of todo items.
 *
 * @param {String} name
 * @param {Object} data source
 * @constructor
 */

function TodoList(name, db) {
  this._name = name;
  this._db = db;
};

/**
 * Return the list's name.
 *
 * @returns {String}
 * @api public
 */

TodoList.prototype.name = function() {
  return this._name;
};

/**
 * Return the data source.
 *
 * @returns {Object}
 * @api public
 */

TodoList.prototype.db = function() {
  return this._db;
};

/*!
 * Export `TodoList`.
 */

module.exports = TodoList;
