// valiable managing unique id
let todoIdx = 0;

export class TodoItemModel {
    /**
     * @param {string} title Title of Todo Item
     * @param {boolean} completed Todo status is finish ⇒true, Todo status is not finish ⇒false 
     */
    constructor({title, completed}) {
        //set id that is sequential number and, is diferent in each instance
        this.id = todoIdx++;
        this.title = title;
        this.completed = completed;
    }
}