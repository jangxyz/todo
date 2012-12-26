
/*!
 * Internal dependencies.
 */

var TodoList = require('../lib/todo-list')
  , TodoItem = require('../lib/todo-item')
  , DataSource = require('./doubles/data-source');

describe('TodoList', function() {
  describe('when adding a todo item', function() {
    var db = null
      , list = null;

    beforeEach(function() {
      db = new DataSource;
      list = new TodoList('personal', db);
    });

    it('persists the todo item', function() {
      list.add('Clean the room');

      db.created.should.have.length(1);
      db.created[0].should.be.an.instanceof(TodoItem);
      db.created[0].list().should.eq('personal');
      db.created[0].text().should.eq('Clean the room');
    });

    it('throws an error if the data source returns one', function() {
      db.throw();

      (function() {
        list.add('Oops');
      }).should.throw();
    });

    it('emits add event when the todo item is persisted', function(done) {
      list.on('add', function(todo) {
        todo.should.be.an.instanceof(TodoItem);
        done();
      });

      list.add('Wash the dishes');
    });
  });

  it('can tell its name', function() {
    var list = new TodoList('personal');
    list.name().should.eq('personal');
  });

  it('can tell its data source', function() {
    var list = new TodoList(null, {});
    list.db().should.eql({});
  });

  it('is an event emitter', function() {
    var list = new TodoList;

    list.should.respondTo('on');
    list.should.respondTo('emit');
  });
});
