
/*!
 * Internal dependencies.
 */

var create = require('../lib/factory')
  , DataSource = require('../lib/data-source')
  , TestReporter = require('./doubles/test-reporter');

describe('factory', function() {
  describe('when creating a todo list', function() {
    it('configures the name of the list', function() {
      var list = create('personal', new TestReporter);
      list.name().should.eq('personal');
    });

    it('build and configures a data source', function() {
      var list = create('personal', new TestReporter, '/tmp/');
      list.db().should.be.an.instanceof(DataSource);
      list.db().path().should.eq('/tmp/');
    });

    it('makes a reporter to observe the todo list', function() {
      var reporter = new TestReporter
        , list = create('personal', reporter);

      reporter.observed.should.eql(list);
    });

    it('throws an error if the desired reporter could not be found', function() {
      (function() {
        create('personal', 'invalid-reporter');
      }).should.throw('Invalid reporter "invalid-reporter"');
    });
  });
});
