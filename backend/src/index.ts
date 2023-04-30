require('dotenv').config() // конфигурируем dotenv
const express = require('express')
const app = express()
const PORT = 9000
const cors = require('cors')
const logger = require('morgan')
const sessions = require('express-session')
const MongoStore = require('connect-mongo');


// console.log(process.env)


app.use(cors({
    credentials: true, // для работы сессиями, и чтобы принимать авторизованные запросы от пользователей
    origin: ['http://localhost:3000', 'https://microai.ru']
}))

let mongoUrl // По какой ссылке мы будем подключаться к нашей БД

if (process.env.NODE_ENV === 'development ') {
    mongoUrl = 'mongodb://admin5:' + process.env.MONGO_DEV_PASSWORD + '@127.0.0.1:27017/microai?authSource=microai'
} else {
    mongoUrl = 'mongodb://admin5:' + process.env.MONGO_PRODUCTION_PASSWORD + '@127.0.0.1:27017/microai?authSource=microai'
}
console.log(mongoUrl)

app.use(sessions({ // Создаём хранилище с сессиями
    secret: 'nvebiruvwnerfqruec3ce',
    store: MongoStore.create({
        mongoUrl: mongoUrl,
        ttl: 30 * 24 * 60 * 60, // сессия на месяц
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30,
    },
}));

console.log('Тут я перед запросом')

// app.get('/sessions', function(req:any, res:any) {
//     const sessions = req.sessionStore.all();
//     res.send(sessions);
// });

const indexRouter = require('./../routes/index')
const usersRouter = require('./../routes/users') // Это, чтобы было видно users по пути '/' внутри файлйа роута.
const allRouter = require('./../routes/all')

app.use(logger('dev'))
app.use(express.json()) // учит экспресс распозновать json формат
app.use('*', allRouter)
app.use('/', indexRouter)
app.use('/users', usersRouter)

app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`)
})