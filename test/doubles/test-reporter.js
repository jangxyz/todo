
/*!
 * A test reporter which simply saves the
 * observed todo list to an instance variable.
 *
 * @constructor;
 */

function TestReporter() {};

/*!
 * Save the observed list.
 *
 * @param {Object} list
 * @api public
 */

TestReporter.prototype.observe = function(list) {
  this.observed = list;
};

/*!
 * Export `TestReporter`.
 */

module.exports = TestReporter;
