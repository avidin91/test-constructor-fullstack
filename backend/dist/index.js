"use strict";
const express = require('express');
const PORT = process.env.PORT || 9000;
const app = express();
app.get('/api', (req, res) => {
    res.json({
        message: 'Hello from backend'
    });
});
app.get('/', (req, res) => {
    res.send('Привет, хер');
});
app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`);
});
console.log('test');
