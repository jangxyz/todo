/*!
 * todo - Todos in the CLI like what.
 *
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Route.
 *
 * Routes represents a path which is matched against
 * the incoming request in order to determine the command
 * that should be executed.
 *
 *    var Route = new Route(/path-to-match/, function() { 'Command' });
 *
 * You can supply string paths. The route converts them to regular
 * expressions.
 *
 * @param {String|RegExp} path
 * @param {Function} handler
 * @api public
 */
function Route(path, handler) {
  if (!path) {
    throw new Error('Provide a path for the route.')
  }

  if (typeof handler !== 'function') {
    throw new Error('Provide a valid route handler.')
  }

  this._path = typeof path === 'string'
    ? new RegExp(path)
    : path;

  this._handler = handler;
};

/**
 * Return the route path. Useful for debugging
 * and testing route's behavior.
 *
 * @returns {RegExp}
 * @api public
 */
Route.prototype.path = function() {
  return this._path;
};

/**
 * Return the route handler.
 *
 * @returns {Function}
 * @api public
 */
Route.prototype.handler = function() {
  return this._handler;
};

// TODO: Add custom error.

/**
 * Expose `Route`.
 */
module.exports = Route;
