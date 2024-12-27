import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList';
import { v4 as uuid } from 'uuid';
import { EditTodoForm } from './EditTodoForm';
uuid();


export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => {
        setTodos([...todos, { id: uuid(), task: todo, completed: false, isEditing: false }]);
        console.log(todos);

    }
    const togglecomplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    }
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const editTodo = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }
    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
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


