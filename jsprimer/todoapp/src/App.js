import { TodoItemModel } from "./model/TodoItemModel.js";
import { TodoListModel } from "./model/TodoListModel.js";
import { element } from "./view/html-util.js";
import { render } from "./view/html-util.js";
import { TodoListView } from "./view/TodoListView.js";

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
            // add each TodoItem elements to todoListElement
            const todoItems = this.todoListModel.getTodoItems();
            // initialize TodoListView
            const todoListView = new TodoListView();
            // create TodoListView from todoItems
            const todoListElement =  todoListView.createElement(todoItems, {
                // listener_function that is called when UpdateEvent of TodoItem dispach
                onUpdateTodo:({id, completed}) => {
                    this.todoListModel.updateTodo({id, completed});
                },
                // listener_function that is called when DeleterEvent of TodoItem dispach
                onDeleteTodo:({id}) => {
                    this.todoListModel.deleteTodo({id});
                }
            });
            // overwride containerElement contents with todoListElement
            // eventlistener call function  
            render(todoListElement, containerElement);
            // update display of count of items
            // eventlistener call function 
            todoItemCountElement.textContent =`Todoアイテム数: ${this.todoListModel.getTotalCount()}`;
        });
        // 3.add new TodoItemModel when html submit form
        // eventlistener call function 
        formElement.addEventListener("submit", (event) => {
            // stop submit event native action
            event.preventDefault();
            // add new TodoItem to TodoList
            this.todoListModel.addTodo(new TodoItemModel({
                // eventlistener call function 
                title: inputElement.value,
                completed: false
            }));
            // eventlistener call function  
            inputElement.value = "";
        });
    }
}