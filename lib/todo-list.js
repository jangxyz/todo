
/*!
 * Core dependencies.
 */

var EventEmitter = require('events').EventEmitter
  , util = require('util');

/*!
 * Internal dependencies.
 */

var TodoItem = require('./todo-item');

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
 * Inherit from `EventEmitter`.
 */

util.inherits(TodoList, EventEmitter)

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

/**
 * Add a todo item to the list.
 *
 * @param {String} todo item text
 * @api public
 */

TodoList.prototype.add = function(text) {
  var self = this
    , item = new TodoItem({ text: text, list: this.name() });

  this.db().create(item, function(err, item) {
    if (err) throw err;
    self.emit('add', item);
  });
};

/*!
 * Export `TodoList`.
 */

module.exports = TodoList;
