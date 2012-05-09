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
var Application = require('../lib/application');

describe('Application', function() {
  var app = null;

  beforeEach(function() {
    app = new Application;
  });

  describe('settings', function() {
    it('can return local value', function() {
      app.set('foo', 'bar');
      app.get('foo').should.eql('bar');
    });

    it('can return value from the configurations', function() {
      var config = { get: function() { return 'bar'} };
      app = new Application(config);

      app.get('foo').should.eql('bar');
    });

    it('prefers local values over those in the configurations object', function() {
      var config = { get: function() { return 'original'} };
      app = new Application(config);

      app.set('foo', 'local');

      app.get('foo').should.eql('local');
    });
  });

  it('delegates start to Router', function(done) {
    var args = { arg: 1 };
    var router = {};
    var app = new Application({}, router);

    router.dispatch = function(arg) {
      arg.should.eql(args);
      done();
    };

    app.start(args);
  });
});
