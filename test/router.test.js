/*!
 * todo - Todos in the CLI like what.
 *
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Support.
 */
var should = require('chai').should();

/**
 * Dependencies.
 */
var Route = require('../lib/route');

/**
 * Helpers.
 */
var noop = function() {};

/**
 * Subject.
 */
var Router = require('../lib/router');

describe('Router', function() {
  var router = null;

  before(function() {
    router = new Router;
  });

  it('can register routes', function() {
    var route = 'route';
    router.register(route);

    router.routes().should.eql([route]);
  });

  describe('when matching a path', function() {
    it('returns the first registered route', function() {
      var first = new Route(/foo/, noop);
      var second = new Route(/foo/, noop);

      router.register(first).register(second);

      router.match(/foo/).should.eql(first);
    });
  });
});
