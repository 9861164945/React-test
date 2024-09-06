import React from 'react';
import TodoItem from './Tudoitem2';

function TodoList({ todos, deleteTodo, editTodo, toggleDone, moveTodo }) {
    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem 
                    key={index} 
                    todo={todo} 
                    index={index} 
                    deleteTodo={deleteTodo} 
                    editTodo={editTodo} 
                    toggleDone={toggleDone} 
                    moveTodo={moveTodo} 
                />
            ))}
        </ul>
    );
}

export default TodoList;
