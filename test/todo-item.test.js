
/*!
 * Internal dependencies.
 */

var TodoItem = require('../lib/todo-item');

describe('TodoItem', function() {
  it('can tell its text', function() {
    var item = new TodoItem({ text: 'Buy a new Mac' });
    item.text().should.eq('Buy a new Mac');
  });

  it('can tell its associated list', function() {
    var item = new TodoItem({ list: 'personal' });
    item.list().should.eq('personal');
  });

  it('can tell its associated list', function() {
    var item = new TodoItem({ list: 'personal' });
    item.list().should.eq('personal');
  });

  it('can return JSON friendly representation of itself', function() {
    var item = new TodoItem({
      id: 1,
      status: TodoItem.DONE,
      list: 'personal',
      text: 'Work'
    });

    item.toJSON().should.eql({
      id: 1,
      text: 'Work',
      status: TodoItem.DONE,
      list: 'personal'
    });
  });
});
