import { element } from "./html-util.js";

export class TodoItemView {
    /**
     * return HTML element from `todoItem`
     * @param {TodoItemModel} todoItem
     * @param {function{id:string, completed:boolean})} onUpdateTodo UpdateEventListener of Checkbox
     * @param {function{id:string}} onDeleteTodo ClickEventListener of delete_button
     * @returns {Element}
     */
    createElement(todoItem, {onUpdateTodo, onDeleteTodo}) {
        const todoItemElement = todoItem.completed
            ? element`<li><input type="checkbox" class="checkbox" checked>
                        <s>${todoItem.title}</s>
                        <button class="delete">x</button>
                    </li>`
            : element`<li><input type="checkbox" class="checkbox">
                        ${todoItem.title}
                        <button class="delete">x</button>
                    </li>`;
        const inputCheckboxElement = todoItemElement.querySelector(".checkbox");
        inputCheckboxElement.addEventListener("change", () => {
            // use todoListModel.updateTodo function as callback
            onUpdateTodo({
                id:todoItem.id,
                completed:!todoItem.completed
            });
        });
        const deleteButtonElement = todoItemElement.querySelector(".delete");
        deleteButtonElement.addEventListener("click", () => {
            // use todoListModel.deleteTodo function as callback
            onDeleteTodo({
                id:todoItem.id
            });
        });
        // return HTML emlements that created from TodoItem
        return todoItemElement;
    }

}