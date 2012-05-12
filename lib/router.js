/*!
 * todo - Todos in the CLI like what.
 *
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Router.
 *
 * The primary responsibility of the router
 * is to determine if given path is matched
 * by a route.
 *
 * The router is used as a route container
 * so all routes should be registered to it.
 *
 * See:
 *
 *    - Router#register
 *    - Router#match
 *
 * @api public
 */
function Router() {
  this._routes = [];
};

/**
 * Register a route.
 *
 *    rouer.register(new Route(/path/, handler));
 *
 * Registered routes are used in the matching mechanism.
 *
 * @param {Route} route
 * @returns {Router}
 * @api public
 */
Router.prototype.register = function(route) {
  this._routes.push(route);
  return this;
};

/**
 * Return all registered routes.
 *
 * @returns {Array}
 * @api public
 */
Router.prototype.routes = function() {
  return this._routes;
};

/**
 * Match a registered route from the routes list.
 *
 * @param {RegExp} path
 * @returns {Route|null}
 * @api public
 */
Router.prototype.match = function(path) {
  var matches = this._routes.filter(function(route) {
    return route.path().test(path);
  });

  if (matches.length) {
    return matches[0];
  }
};

/**
 * Expose `Router`.
 */
module.exports = Router;
