import React, { useState } from 'react'

let globalID = 0

function ToDo() {

    const [task, setTask] = useState("")
    const [todos, setTodos] = useState([])

    function createTodo() {
        setTodos(oldTodos => {
            setTask('')
            return [...oldTodos, { todo: task, id: globalID++ }]
        })
    }

    function checkEnterKey(event) {
        if (event.key === "Enter") {
            createTodo()
        }
    }

    function formSubmitCreateTodo(event) {
        event.preventDefault()
        createTodo()
    }

    function deleteItem(itemID) {
        setTodos(oldTodos => oldTodos.filter(item => item.id !== itemID))
    }
    
    return (<div>
            {/* Designed using native HTML features */}
            <h3>To Do App</h3>
            <form onSubmit={formSubmitCreateTodo}>
                <input type="text" value={task} 
                    onChange={event => {
                        setTask(event.target.value)
                    }}
                />
                <button type="submit">Create Todo</button>
            </form>
            <ul>
                {todos.map(item => {
                    return (
                        <div key={item.id}>
                            <li>{item.todo}({item.id})</li>
                            <button onClick={() => deleteItem(item.id)}>Delete</button>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default ToDo;

/* Designed using javascript approach
<div>
    <h3>To Do App</h3>
    <input type="text" value={task} 
        onChange={event => {
            setTask(event.target.value)
        }}
        onKeyDown={checkEnterKey}
    />
    <button onClick={createTodo}>Create Todo</button>
    <ul>
        {todos.map(todo => {
            return <li>{todo}</li>
        })}
    </ul>
</div> 
*/