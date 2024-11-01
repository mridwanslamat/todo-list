// src/TodoForm.js
import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!todo) return;
    addTodo(todo);
    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={e => setTodo(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;