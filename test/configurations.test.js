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
var Configurations = require('../lib/configurations');

describe('Configurations', function() {
  var config = null;

  beforeEach(function() {
    config = new Configurations;
  });

  it('can store keys and values', function() {
    config.set('foo', 'bar');
    config.get('foo').should.eql('bar');
  });

  it('can store multiple values at once', function() {
    config.set({ foo: 'bar', bar: 'baz' });

    config.get('foo').should.eql('bar');
    config.get('bar').should.eql('baz');
  });
});
