// src/App.js
import React, { useState } from 'react';
import TodoList from './TodoList';
import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';
import './App.css';


function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim() && !tasks.some(t => t.text === task.trim())) {
      setTasks([...tasks, { text: task.trim(), completed: false }]);
      setTask('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') addTask();
  };

  const toggleCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <Container>
      <Box my={4} textAlign="center">
        <Typography variant="h3" gutterBottom>
          Todo List
        </Typography>
        <Paper elevation={3} style={{ padding: 16, maxWidth: 600, margin: '0 auto' }}>
          <Box mb={2} display="flex" justifyContent="center">
            <TextField
              label="New Task"
              variant="outlined"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              onKeyDown={handleKeyPress}
              style={{ flex: 1 }}
            />
            <Button onClick={addTask} variant="contained" color="primary" style={{ marginLeft: 8 }}>
              Add
            </Button>
          </Box>
          <TodoList
            tasks={tasks}
            toggleCompletion={toggleCompletion}
            deleteTask={deleteTask}
          />
          <Box mt={2} textAlign="center">
            <Typography variant="h6">
              Total Tasks: {totalTasks}
            </Typography>
            <Typography variant="h6">
              Completed Tasks: {completedTasks}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default App;
