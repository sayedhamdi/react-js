import React from "react"

export default function TodoList(){
    // state 
    return (
        <>
            <AddTodo />
            <Todos />
        </>
    )
}
function Todos({list}){
    let todos = ["task 1", "task 2", "task 3","khobz","echri khobz"]
    return (
    <ul>
        {todos.filter(todo=>!todo.includes("khobz")).map(todo =><Todo task={todo}/>)}
    </ul>
    )
}

function AddTodo(){
    return (
        <div>
            <input type="text" />
            <button>add todo</button>
        </div>
    )
}
function Todo({task}){
    return (<li style={{color:'orange'}}>{task}</li>)
}