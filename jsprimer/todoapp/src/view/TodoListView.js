import {element} from "./html-util.js";
import {TodoItemView} from "./TodoItemView.js";

export class TodoListView {
    /**
     * return HTML element from TodoList
     * @param {TodoItemModel[]} todoItems Array of TodoItemModel
     * @param {function({id:string, completed:boolean})} onUpdateTodo UpdateEventListener of CheckBox
     * @param {function{id:string}} onDeleteTodo ClickEventListener of Delete_Button
     * returns {Element} HTML element created from Array of TodoItemModel
     */
    createElement(todoItems, {onUpdateTodo, onDeleteTodo}) {
        const todoListElement = element`<ul/>`;
        // create todoItems elements and add each of them to todoListElement
        todoItems.forEach(todoItem => {
            const todoItemView = new TodoItemView();
            const todoItemElement = todoItemView.createElement(todoItem, {
                onDeleteTodo,
                onUpdateTodo
            });
            todoListElement.appendChild(todoItemElement);
        });
        return todoListElement;
    }
}