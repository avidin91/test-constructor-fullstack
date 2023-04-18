const express = require('express')
const app = express()
const PORT = process.env.PORT || 9000
const cors = require('cors')


app.use(cors({
    credentials: 'true', // для работы сессиями, и чтобы принимать авторизованные запросы от пользователей
    origin: ['http://localhost:3000', 'https://microai.ru']
}))


const indexRouter = require('./../routes/index')
const usersRouter = require('./../routes/users') // Это, чтобы было видно users по пути '/' внутри файлйа роута.

app.use('/', indexRouter)
app.use('/users', usersRouter)

app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`)
})