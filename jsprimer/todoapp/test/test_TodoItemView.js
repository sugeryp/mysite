import { TodoItemModel } from "../src/model/TodoItemModel.js";
import { TodoItemView } from "../src/view/TodoItemView.js";

// TodoItemViewをインスタンス化
const todoItemView = new TodoItemView();
// 対応するTodoItemModelを作成する
const todoItemModel = new TodoItemModel({
    title: "あたらしいTodo",
    completed: false
});
// TodoItemModelからHTML要素を作成する
const todoItemElement = todoItemView.createElement(todoItemModel, {
    onUpdateTodo: () => {
        // チェックボックスが更新されたときに呼ばれるリスナー関数
    },
    onDeleteTodo: () => {
        // 削除ボタンがクリックされたときに呼ばれるリスナー関数
    }
});
console.log(todoItemElement); // <li>要素が入る