require('dotenv').config() // конфигурируем dotenv
const express = require('express')
const app = express()
const PORT = process.env.PORT || 9000
const cors = require('cors')


app.use(cors({
    credentials: true, // для работы сессиями, и чтобы принимать авторизованные запросы от пользователей
    origin: ['http://localhost:3000', 'https://microai.ru']
}))

const allRouter = require('./../routes/all')
const indexRouter = require('./../routes/index')
const usersRouter = require('./../routes/users') // Это, чтобы было видно users по пути '/' внутри файлйа роута.


app.use(express.json()) // учит экспресс распозновать json формат

app.use('*', allRouter)
app.use('/', indexRouter)
app.use('/users', usersRouter)

app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`)
})