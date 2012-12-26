
/*!
 * Core dependencies.
 */

var fs = require('fs')
  , path = require('path');

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

/**
 * Create a new todo item.
 *
 * @param {Object} todo item
 * @param {Function} callback
 * @api public
 */

DataSource.prototype.create = function(item, fn) {
  var list = item.list();

  this.save(item, function(err, item) {
    fn(err, item);
  });
};

/**
 * Save a todo item.
 *
 * @param {Object} item
 * @param {Function} callback
 * @api private
 */

DataSource.prototype.save = function(item, fn) {
  var file = this.file()
    , list = item.list();

  fs.readFile(file, 'utf8', function(err, data) {
    if (!err) data = JSON.parse(data);
    else if (err.code === 'ENOENT') data = {};
    else return fn(err);

    data[list] = data[list] || [];
    data[list].push(item.toJSON());

    // TODO: set id

    fs.writeFile(file, JSON.stringify(data), 'utf8', function(err) {
      fn(err, item);
    });
  });
};

/**
 * Return a full path to the database file.
 *
 * @returns {String}
 * @api private
 */

DataSource.prototype.file = function() {
  return path.join(this.path(), '.todo');
};

/*!
 * Export `DataSource`.
 */

module.exports = DataSource;
