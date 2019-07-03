class Todo{
    constructor(title) {
        this.id=0;
        this.title=title;
        this.completed=false;
    }
    getTitle(){
        return this.title;
    }
    setTitle(title){
        this.title=title;
    }
    isCompleted(){
        return this.completed;
    }
    setCompleted(completed){
        this.completed=completed;
    }
    getId(){
        return this.title;
    }
    setId(id){
        this.id=id;
    }
}
class TodoList{
    constructor(){
        this.userMap={}
    } 
    addTodo(user,title){
        let newTodo = new Todo(title);
        if(Todo.count === undefined)
        {
            Todo.count=1;
        }else
        {
            Todo.count++;
        }
        newTodo.setId(Todo.count);
        if( user in this.userMap)
        {
            this.userMap[user].push(newTodo);
        }else
        {
            this.userMap[user]=[];
            this.userMap[user].push(newTodo);
        }
    }
    // getIndex(arr,predicate){
    //     let todo = arr.find(predicate);
    //     return userMap[user].indexOf(todo);
    // }
    editTodo(user,id,title){
        if(this.userMap[user])
        {
            // let index = getIndex(userMap[user],o=>o.id===id);
            // userMap[user][index].title=title;
            this.userMap[user].find(o=>o.id===id).title=title;
        }
    }
    completeTodo(user,id){
        if(this.userMap[user])
        {
            // let index = getIndex(userMap[user],o=>o.id===id);
            this.userMap[user].find(o=>o.id===id).completed=true;
        }
    }
    completeAll(){
        Object.keys(this.userMap).forEach(function(key,value) {
            value.forEach(function(){
                this.completed=true;
            });
        });
    }
    displayAll(){
        // Object.keys(this.userMap).forEach(function(items) {
        //     console.log("-------------------------------------------------------");
        //     // value.forEach(function(item){
        //     //     console.log(item);
        //     // });
        //     console.log(items);
        // });
        Object.entries(this.userMap).forEach(([key, value]) => {
            console.log('----------------------------'+key+'-----------------------------');
            value.forEach(function(item){
                console.log(item);
            });
        });
    }
}

let myTodo = new TodoList();
myTodo.addTodo("Omkar","first hand with JavaScript");
myTodo.addTodo("Omkar","Second hand with JavaScript");
myTodo.addTodo("Omkar","Third hand with JavaScript");

myTodo.addTodo("Manish","first hand with Java");
myTodo.addTodo("Manish","Second hand with Java");
myTodo.addTodo("Manish","Third hand with Java");
// console.log(myTodo);
myTodo.displayAll();
myTodo.completeTodo("Omkar",2);
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
myTodo.displayAll();


let arr1 = [1,2,3,4]
let arr2 = [1,3,4]

console.log(arr1.filter(arr2));