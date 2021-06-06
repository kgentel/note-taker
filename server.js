const express = require('express');
const app = express();
const db  = require('./db/db');

const PORT = process.env.PORT || 3001;




app.get('/api/db', (req, res) => {
    res.json(db);
});

app.listen(3001, () => {
    console.log(`API server now on port ${PORT}!`);
});