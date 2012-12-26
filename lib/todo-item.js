
/**
 * Todo item.
 *
 * @constructor
 */

function TodoItem(attributes) {
  this.attributes = attributes;
};

/**
 * Pending flag.
 */

TodoItem.DONE = 'done';

/**
 * Done flag.
 */

TodoItem.PENDING = 'pending'

/**
 * Return the name of the associated todo list.
 *
 * @returns {String}
 * @api public
 */

TodoItem.prototype.list = function() {
  return this.attributes.list;
};

/**
 * Return the todo item text.
 *
 * @returns {String}
 * @api public
 */

TodoItem.prototype.text = function() {
  return this.attributes.text;
};

/**
 * ID accessor.
 *
 * @param {Number} id [optional]
 * @returns {Number} id
 * @api public
 */

TodoItem.prototype.id = function() {
  return this.attributes.id;
};

/**
 * Status getter.
 *
 * @returns {String} status - done or pending.
 * @api public
 */

TodoItem.prototype.status = function() {
  return this.attributes.status;
};

/**
 * To JSON.
 *
 * @returns {Object}
 * @api public
 */

TodoItem.prototype.toJSON = function() {
  return {
    id: this.id(),
    text: this.text(),
    status: this.status(),
    list: this.list(),
  };
};

/*!
 * Export `TodoItem`.
 */

module.exports = TodoItem;
