import { TodoItemModel } from "../src/model/TodoItemModel.js";
import { TodoListModel } from "../src/model/TodoListModel.js";
import { TodoListView } from "../src/view/TodoListView.js";

// TodoListViewをインスタンス化
const todoListView = new TodoListView();

// 新しいTodoリストを作成する
const todoListModel = new TodoListModel();

// 新しいTodoアイテムを追加する
todoListModel.addTodo(new TodoItemModel({
    title: "新しいTodoアイテム",
    completed: false
}));

const todoListElement = todoListView.createElement(todoListModel.getTodoItems(), {
    onUpdateTodo: () => {
        // チェックボックスが更新されたときに呼ばれるリスナー関数
    },
    onDeleteTodo: () => {
        // 削除ボタンがクリックされたときに呼ばれるリスナー関数
    }
})


console.log(todoListElement); // <ul>要素が入る