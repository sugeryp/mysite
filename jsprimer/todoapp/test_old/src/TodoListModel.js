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
}