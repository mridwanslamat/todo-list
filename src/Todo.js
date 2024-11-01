// src/Todo.js
import React from 'react';

const Todo = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <div style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
      {todo.text}
      <button onClick={() => toggleComplete(todo.id)}>Complete</button>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default Todo;