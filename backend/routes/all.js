const express = require('express')
const router = express.Router()

router.all('*', (req, res, next) => { // Тут обрабатываются все запросы, которые пришли на сервер. И дальше уже будет обрабатываться тот запрос, куда мы его направили
    const domain = process.env.Node_ENV = 'development ' ? process.env.DEV_Host : process.env.PROD_HOST
    res.setHeader('Access-Control-Allow-Origin', domain); // Без .env можно подставить только 1 домен. А .env определяет автоматически, какой домен подставлять
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next()
})

module.exports = router