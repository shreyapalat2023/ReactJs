
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const TodoList = ({ task, togglecomplete, deleteTodo, editTodo }) => {
    return (
        <div className='TodoList'>
            <p className={`${task.completed ? "completed" : ""}`} onClick={() => togglecomplete(task.id)}>{task.task}</p>
            <div>
                <FontAwesomeIcon className = "edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon className="fa-trash delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />

            </div>

        </div>
    )
}






