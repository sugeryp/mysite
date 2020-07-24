import { TodoItemModel } from "./model/TodoItemModel.js";
import { TodoListModel } from "./model/TodoListModel.js";
import { element } from "./view/html-util.js";
import { render } from "./view/html-util.js";

export class App {
    constructor() {
        // 1. initialize TodoList
        this.todoListModel = new TodoListModel();
    }
    mount() {
        const formElement = document.querySelector("#js-form");
        const inputElement = document.querySelector("#js-form-input");
        const containerElement = document.querySelector("#js-todo-list");
        const todoItemCountElement = document.querySelector("#js-todo-count");
        // 2. Update display when TodoListModel status changes
        this.todoListModel.onChange(() => {
            // List element to marge TodoList
            const todoListElement = element`<ul />`;
            // add each TodoItem elements to todoListElement
            const todoItems = this.todoListModel.getTodoItems();
            todoItems.forEach(item => {
                const todoItemElement = element`<li>${item.title}</li>`;
                todoListElement.appendChild(todoItemElement);
            });
            // overwride containerElement contents with todoListElement
            render(todoListElement, containerElement);
            // update display of count of items
            todoItemCountElement.textContent =`Todoアイテム数: ${this.todoListModel.getTotalCount()}`;
        });
        // 3.add new TodoItemModel when html submit form 
        formElement.addEventListener("submit", (event) => {
            // stop submit event native action
            event.preventDefault();
            // add new TodoItem to TodoList
            this.todoListModel.addTodo(new TodoItemModel({
                title: inputElement.nodeValue,
                completed: false
            }));
            inputElement.value = "";
        });
    }
}