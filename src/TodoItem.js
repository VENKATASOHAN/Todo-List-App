// src/TodoItem.js
import React from 'react';
import { ListItem, ListItemText, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoItem({ task, onToggle, onDelete }) {
  return (
    <ListItem
      style={{
        textDecoration: task.completed ? 'line-through' : 'none',
        borderBottom: '1px solid #ddd',
        borderRadius: '4px',
        marginBottom: '8px',
        padding: '8px'
      }}
    >
      <Checkbox
        checked={task.completed}
        onChange={onToggle}
        style={{ marginRight: 16 }}
      />
      <ListItemText primary={task.text} />
      <IconButton edge="end" aria-label="delete" onClick={onDelete}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
}

export default TodoItem;
