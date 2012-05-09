/*!
 * todo - Todos in the CLI like what.
 *
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Application.
 * Represent a CLI application.
 *
 * @param {Configurations} configurations
 * @param {Router} router
 * @api public
 */
function Application(configurations, router) {
  this.configurations = configurations;
  this.router = router;
  this.settings = [];
};

/**
 * Assign a setting. If the setting exist both in the
 * configurations object and locally it prefers
 * the local value.
 *
 *   app.set('foo', 'bar'):
 *
 *   app.get('foo') // => 'bar'
 *
 * @param {String} setting key
 * @param {Mixed} value
 * @returns {Application}
 * @api public
 */
Application.prototype.set = function(key, value) {
  this.settings[key] = value;
  return this;
};

/**
 * Return a setting value. Also checks if the key
 * exists in the `configurations` object if there
 * are no matching local key.
 *
 * Local settings:
 *
 *    app.set('foo', 'bar'):
 *
 *    app.get('foo') // => 'bar'
 *
 * Delegate to the configurations:
 *
 *    configurations.set('foo', 'bar');
 *    var app = new Application(configurations);
 *    app.get('foo'); // => bar
 *
 * In case a property is overwritten it returns the local
 * value:
 *
 *    configurations.set('foo', 'original');
 *    var app = new Application(configurations);
 *    app.set('foo', 'new'):
 *
 *    app.get('foo') // => 'new'
 *
 * @param {String} setting key
 * @returns {Mixed}
 * @api public
 */
Application.prototype.get = function(key) {
  return this.settings[key]
    ? this.settings[key]
    : this.configurations.get(key);
};

/**
 * Start the application.
 * Delegate the dispatching to the router.
 *
 * @param {Object} argv
 * @api public
 */
Application.prototype.start = function(argv) {
  this.router.dispatch(argv);
};

/**
 * Expose `Application`.
 */
module.exports = Application;
