
/**
 * Print given messages.
 *
 * @param {String|Array} messages
 * @api public
 */

exports.print = function(messages) {
  var output = null;

  if (!Array.isArray(messages)) {
    messages = [messages];
  }

  output = messages.map(function(message) {
    return '  ' + message;
  }).join('\n');

  process.stdout.write('\n' + output + '\n\n');
};
