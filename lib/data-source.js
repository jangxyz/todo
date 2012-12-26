
/**
 * Data source constructor.
 * Manipulates a JSON "database".
 *
 * @param {String} path
 * @constructor
 */

function DataSource(path) {
  this._path = path;
};

/**
 * Return the data source's path.
 *
 * @returns {String}
 * @api public
 */

DataSource.prototype.path = function() {
  return this._path;
};

/*!
 * Export `DataSource`.
 */

module.exports = DataSource;
