
import React, { useEffect, useState } from 'react'
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList';
import { v4 as uuid } from 'uuid';
import { EditTodoForm } from './EditTodoForm';
uuid();


export const TodoWrapperLocalStorage = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        console.log(savedTodos);

    }, [])

    const addTodo = (todo) => {
        const newTodos = [...todos, { id: uuid(), task: todo, completed: false, isEditing: false }];
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));

    }
    const togglecomplete = (id) => {
        const newTodos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    }
    const deleteTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    }
    const editTodo = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }
    const editTask = (task, id) => {
        const newTodos = todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo)
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    }
    return (
        <div className='TodoWrapper'>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo} />
                ) : (
                    <TodoList task={todo} key={index} togglecomplete={togglecomplete} deleteTodo={deleteTodo} editTodo={editTodo} />
                )

            ))}
        </div>
    )
}
