import { EventEmitter } from "../EventEmitter.js";

export class TodoListModel extends EventEmitter {
    /**
     * @param {TodoItemModel[]} [items] initial item list
     */
    constructor(items =[]) {
        super();
        this.items = items;
    }

    /**
     * return total count of TodoItems
     * @return {number}
     */
    getTotalCount() {
        return this.items.length;
    }

    /**
     * return TodoItem Array that is displaied
     * @returns {TodoItemModel[]}
     */
    getTodoItems() {
        return this.items;
    }

    /**
     * register listener_function that is called when TodoList status change
     * @param {Function} listener
     */
    onChange(listener) {
        this.addEventListener("change", listener);
    }

    /**
     * call registerted listener_function when TodoList status change
     */
    emitChange() {
        this.emit("change");
    }

    /**
     * add TodoItem
     * @param {TodoItemModel} todoItem
     */
    addTodo(todoItem) {
        this.items.push(todoItem);
        this.emitChange();
    }

    /**
     * update completed property of TodoItem destenated id
     * @param {{ id:number, completed:boolean }}
     */
    updateTodo({id, completed}) {
        // find TodoItem that maches `id`, if the TodoItem is exist, update completed property value
        const todoItem = this.items.find(todo => todo.id === id);
        if (!todoItem) {
            return;
        }
        todoItem.completed = completed;
        this.emitChange();
    }

    /**
     * delete TodoItem whose id is destenated
     * @param {{ id:number }}
     */
    deleteTodo({ id }) {
        // remain TodoItem whose `id` doesn't mache
        this.items = this.items.filter(todo => {
            return todo.id !== id;
        });
        this.emitChange();
    }
}