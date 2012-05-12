/*!
 * todo - Todos in the CLI like what.
 *
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Configurations.
 *
 * Simple in memory key-value storage.
 *
 * @api public
 */
function Configurations() {
  this.collection = [];
};

/**
 * Set a configuration value.
 *
 *    config.set('tmp', 'bar');
 *    config.set({foo: 'bar', bar: 'baz'});
 *
 *    config.get('tmp') // => bar
 *    config.get('foo') // => bar
 *    config.get('bar') // => baz
 *
 * @param {String} key
 * @param {Mixed} value
 * @return `Configurations` this
 * @api public
 */
Configurations.prototype.set = function(key, value) {
  var self = this;

  if (Object(key) === key) {
    Object.keys(key).forEach(function(name) {
      self.collection[name] = key[name];
    });
  } else {
    this.collection[key] = value;
  }

  return this;
};

/**
 * Get a configuration value.
 *
 *    config.get('foo') // => bar
 *
 * @param {String} key
 * @return {Mixed} value
 * @api public
 */
Configurations.prototype.get = function(key) {
  return this.collection[key];
};

/**
 * Expose `Configurations`.
 */
module.exports = Configurations;
