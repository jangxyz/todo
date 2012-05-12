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
 * Subject.
 */
var Route = require('../lib/route');

describe('Route', function() {
  var handler = function handler() {};

  describe('path', function() {
    it('is converted to a regular expression', function() {
      var route = new Route('foo', handler);
      route.path().should.eql(/foo/);
    });

    it('can be fetched', function() {
      var route = new Route(/foo/, handler);
      route.path().should.eql(/foo/);
    });

    it('is required', function() {
      (function() {
        var route = new Route;
      }).should.throw(Error);
    });
  });

  describe('handler', function() {
    it('can be fetched', function() {
      var route = new Route(/foo/, handler);
      route.handler().should.eql(handler);
    });

    it('is required', function() {
      (function() {
        var route = new Route(/path/);
      }).should.throw(Error);
    });
  });
});
