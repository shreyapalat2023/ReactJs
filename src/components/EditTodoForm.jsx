import React, { useState } from 'react'

export const EditTodoForm = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task);
    const submitHandleChange = (e) => {
        e.preventDefault();  
        editTodo(value, task.id);

    }
    return (
        <form className='TodoForm' onSubmit={submitHandleChange}>
            <input type='text' placeholder='Update Task' className='todo-input' onChange={(e) => setValue(e.target.value)}></input>
            <button className='todo-btn'>Update Task</button>
        </form>
    )
}
