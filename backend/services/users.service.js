const dbConnect = require('./dbConnect')
const mongoose = require("mongoose");
const User = require('./../models/User') // путь к модели, чтобы в коллекцию считывалось

async function addUserToDb() { // В этой папке создаём сервисы.
    await dbConnect()

    const collection = mongoose.model('users') // создаём коллекцию, использую модель users
    await collection.create({ // кладём юзеров в коллекцию
        username: 'jenya',
        password: '1234dedfz56',
        role: 'user'

    })
}

module.exports = {addUserToDb}