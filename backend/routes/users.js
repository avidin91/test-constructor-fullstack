// В этой папке лежат пути. app.get('/api) - т.к. путей будет много, для каждого пути свой файл.
const express = require('express');
const {save, getAllUsers, deleteAllUsers, getUserByEmailAndPassword, getUserById} = require("../services/users.service");
const router = express.Router();


router.get('/', (req, res) => { //app меняем на router. Сам путь /users заменяем на '/', т.к. сам путь будет братся из файла users.js. Чтобы происходило, добавляем строку в index.ts
    res.json({
        message: 'Hello from backend123'
    })
})

router.get('/me', async (req, res) => {
    const _id = req.session.user._id
    const user = await getUserById(_id)
    res.json({ok: true, user: user})
})

router.get('/get/users', async(req,res) => { // получаем коллекцию всех юзеров
    const users = await getAllUsers();
    res.json({ok: true, users})
})

router.get('/delete/users', async(req,res) => { // получаем коллекцию всех юзеров
    const users = await deleteAllUsers();
    res.json({ok: true, users})
})

router.post('/signup', async (req, res) => {
    const user = req.body // Данные в запросе приходят в body, эта переменная есть в каждом запросе
    console.log('Внутри сигнапа')
    try {
        await save(user)
        const doc = await getUserByEmailAndPassword(user)
        req.session.user = {_id: doc._id}
        await req.session.save()
        console.log('req.session Внутри сигнапа', req.session)
        res.json({ok: true}) // сохранился юзер
    } catch (e) {
        console.error(e)
        res.json({ok: false}) // не сохранился юзер
    }
})



router.post('/login', async (req, res) => {
    const user = req.body
    const doc = await getUserByEmailAndPassword(user)
    if (doc) {
        req.session.user = {_id: doc._id} // Теперь в нашей сессии будет храниться id пользователя
        await req.session.save() // сохраняем сессию
        res.json({ok: true})
    } else {
        res.json({ok: false})
    }
    console.log('req.session - login', req.session)
})

router.get('/logout', async (req, res) => {
    const domain = process.env.NODE_ENV === 'development ' ? process.env.DEV_HOST : process.env.PROD_HOST
    req.session.destroy() // удаляем сессию
    res.clearCookie('connect.sid', {path: '/'}) // удаляем cookie

    res.redirect(domain)
})

router.post('/check/auth', async (req, res) => {
    console.log('req.session auth page', req.session)
    if (!req.session.user) { // если юзер не найден
        res.json({ok:false}).end()
        return
    }
    const _id = req.session.user._id
    const user = await getUserById(_id)
    if (user) {
        res.json({ok: true})
    } else {
        res.json({ok: false})
    }
})

module.exports = router;