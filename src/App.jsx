import React, { useState, useEffect } from 'react';
import TodoList from './Component/TodoList';
import AddTodo from './Component/AddTodo';
import SearchBar from './Component/SearchBar';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    // Load todos from localStorage 
    // for Saving the todos After Refreshing u can use locastorage.setItem();
     //localStorage.setItem('todos', JSON.stringify(todos));
 
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(storedTodos);
        console.log("Loaded Todos:", storedTodos);
    }, []);

    
    const addTodo = (text) => {
        const newTodos = [...todos, { text, isDone: false }];
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
 
    };

    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
 
    };

    const editTodo = (index, newText) => {
        const newTodos = [...todos];
        newTodos[index].text = newText;
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
 
    };

    const toggleDone = (index) => {
        const newTodos = [...todos];
        newTodos[index].isDone = !newTodos[index].isDone;
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
 
    };

    const moveTodo = (index, direction) => {
        if ((index === 0 && direction === -1) || (index === todos.length - 1 && direction === 1)) {
            return;
        }
        const newTodos = [...todos];
        const [movedTodo] = newTodos.splice(index, 1);
        newTodos.splice(index + direction, 0, movedTodo);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
 
    };

    const filteredTodos = todos.filter(todo => 
        todo.text.toLowerCase().includes(searchQuery.toLowerCase())
 
    );

    return (
        <div className="todo-app">
            <h1>Todo App</h1>
            <SearchBar setSearchQuery={setSearchQuery} />
            <AddTodo addTodo={addTodo} />
            <TodoList 
                todos={filteredTodos} 
                deleteTodo={deleteTodo} 
                editTodo={editTodo} 
                toggleDone={toggleDone} 
                moveTodo={moveTodo} 
            />
        </div>
    );
}

export default App;
