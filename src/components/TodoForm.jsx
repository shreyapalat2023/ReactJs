import React, { useState } from 'react'

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const submitHandleChange = (e) => {
        e.preventDefault();
        if (value) {
            // add todo
            addTodo(value);
            // clear form after submission
            setValue(e.target.value = "");
        }
    }
    return (
        <form className='TodoForm' onSubmit={submitHandleChange}>
            <input type='text' placeholder='What is the task today?' className='todo-input' onChange={(e) => setValue(e.target.value)} value={value}></input>
            <button className='todo-btn'>Add Task</button>
        </form>
    )
}
