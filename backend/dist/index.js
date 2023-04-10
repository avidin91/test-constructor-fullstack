"use strict";
const express = require('express');
const app = express();
const PORT = process.env.PORT || 9000;
const indexRouter = require('./../routes/index');
const usersRouter = require('./../routes/users'); // Это, чтобы было видно users по пути '/' внутри файлйа роута.
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`);
});
