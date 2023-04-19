// В этой папке лежат пути. app.get('/api) - т.к. путей будет много, для каждого пути свой файл.
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { //app меняем на router. Сам путь /users заменяем на '/', т.к. сам путь будет братся из файла users.js. Чтобы происходило, добавляем строку в index.ts
    res.json({
        message: 'Hello from backend123'
    })
})

router.post('/signup', async (req, res) => {
    const user = req.body // Данные в запросе приходят в body, эта переменная есть в каждом запросе
    console.log('req body = ', req.body)
    console.log(user)

    res.json({ok: true})
})

module.exports = router;