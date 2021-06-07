const express = require('express');
const { futimesSync } = require('fs');
const path = require('path');
const app = express();
const notes  = require('./db/db');

const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


function createNewTask(body, tasksArray) {
    const task = body;
    tasksArray.push(task);

    return task;
}







app.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();
    
    const task = createNewTask(req.body, notes);
    res.json(task);
});


app.get('/api/notes', (req, res) => {
    res.json(notes);
});
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
  });
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});