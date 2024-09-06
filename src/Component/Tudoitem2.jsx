import React from 'react';

function Todoitem2({ todo, index, deleteTodo, editTodo, toggleDone, moveTodo }) {
    return (
        <li className={`todo-item ${todo.isDone ? 'done' : 'False'}`}>
            <input 
                type="checkbox" 
                checked={todo.isDone} 
                onChange={() => toggleDone(index)} 
            />
            <span>{todo.text}</span>
            <button onClick={() => editTodo(index, prompt('Edit task:', todo.text))}>Edit</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
            <button onClick={() => moveTodo(index, -1)}>▲</button>
            <button onClick={() => moveTodo(index, 1)}>▼</button>
        </li>
    );
}

export default Todoitem2;
