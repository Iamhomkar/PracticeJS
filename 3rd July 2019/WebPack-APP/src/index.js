import 'bootstrap/dist/css/bootstrap.css'
import './css/my-theme.css';

function renderTodoList(count="5"){
    let url = "https://jsonplaceholder.typicode.com/todos?_limit=";
    url=url+count;
    let promise = fetch(url);
    let list = document.getElementById('todoContainer');  
    fetch(url)
    .then(response=>response.json())
    .then(todos=>{
        // console.log(todos); 
        let arr = todos.map(todo=>{
            let li = `
                <li class="list-group-item ${todo.completed ? 'bg-success':''}">
                ${todo.id}-${todo.title}-${todo.completed}
                </li>
            `;
            return li;
        });
        list.innerHTML = arr.join(' ');
    });
}

document.getElementById("todoBtn").addEventListener('click',()=>{ 
    renderTodoList();
});

document.getElementById('countTodo').addEventListener('input',(e)=>{
    renderTodoList(e.data);
});