// src/TodoList.js
import React from 'react';
import TodoItem from './TodoItem';
import { List } from '@mui/material';

function TodoList({ tasks, toggleCompletion, deleteTask }) {
  return (
    <List>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          onToggle={() => toggleCompletion(index)}
          onDelete={() => deleteTask(index)}
        />
      ))}
    </List>
  );
}

export default TodoList;
