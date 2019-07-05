import 'bootstrap/dist/css/bootstrap.css'
import './css/my-theme.css';

function renderTodoList(count=5){
    let url = "https://jsonplaceholder.typicode.com/todos?_limit=";
    url=url+count;
    // console.log(url);
    let promise = fetch(url);
    let list = document.getElementById('todoContainer');  
    fetch(url)
    .then(response=>response.json())
    .then(todos=>{
        let arr = todos.map(todo=>{
            let li = `
                <tr>
                <td>${todo.id}</td><td>${todo.title}</td><td><font color="${todo.completed ? 'red':'green'}">${todo.completed}</font></td>
                </tr>
            `;
            return li;
        });
        // ${todo.completed ? 'bg-success':''}
        // console.log(arr.join(' '));
        list.innerHTML = list.innerHTML + `
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Completed</th>
                    </tr>
                </thead>
                <tbody id="todoItems">

                </tbody>
            </table>
        `;
        let tableHead = `
        
        `;
        document.getElementById("todoItems").innerHTML=arr.join(' ');
    });
}

document.getElementById("todoBtn").addEventListener('click',()=>{ 
    renderTodoList();
});

// document.getElementById('countTodo').addEventListener('input',(e)=>{
//     renderTodoList(e.data);
// });