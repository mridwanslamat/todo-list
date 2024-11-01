// src/App.js
import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    const newTodo = {
      id: uuidv4(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
    </div>
  );
};

export default App;