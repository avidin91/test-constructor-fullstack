const dbConnect = require('./dbConnect')
const mongoose = require("mongoose");
const User = require('./../models/User') // путь к модели, чтобы в коллекцию считывалось

async function save(user) { // Добавляем юзеров (регистрация)
    await dbConnect()

    const collection = mongoose.model('users') // создаём коллекцию, использую модель users
    await collection.create({ // кладём юзеров в коллекцию
        email: user.email,
        password: user.password,
        username: 'user' + new Date().getTime(),
        role: 'user'

    })
}

async function getAllUsers() { // получаем юзеров
    await dbConnect();
    const collection = mongoose.model('users')
    const users = await collection.find({})
    return users
}

async function deleteAllUsers() { // получаем юзеров
    await dbConnect();
    const collection = mongoose.model('users')
    const users = await collection.deleteMany({}) // Опасно использовать на рабочем проекте, т.к. можно удалить всех юзеров
}

async function getUserByEmailAndPassword(user) { // получаем юзера по email и password
    await dbConnect();
    const collection = mongoose.model('users')
    const doc = await collection.findOne({email: user.email, password: user.password})
    return doc
}

async function getUserById(_id) {
    await dbConnect();
    const collection = mongoose.model('users');
    const user = await collection.findOne({_id: _id})
    return user
}

module.exports = {save, getAllUsers, deleteAllUsers, getUserByEmailAndPassword, getUserById}