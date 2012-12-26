
/*!
 * Double data source, capable of
 * throwing exceptions and saving
 * the supplied information.
 *
 * @constructor
 */

function DataSource() {
  this.created = [];
  this.err = null;
};

/*!
 * Create a todo item.
 *
 * @param {Object} item
 * @param {Function} callback
 * @api public
 */

DataSource.prototype.create = function(item, fn) {
  this.created.push(item);
  fn(this.err, item);
};

/*!
 * Throw an error on the next call.
 *
 * @api public
 */

DataSource.prototype.throw = function() {
  this.err = new Error;
};

/*!
 * Expose `DataSource`.
 */

module.exports = DataSource;
