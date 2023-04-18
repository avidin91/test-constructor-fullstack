// В папке models описываем объекты
const mongoose = require('mongoose') // mongoose позволяет документы в БД представлять в качестве объектов
const Schema = mongoose.Schema


const schema = new Schema({ // Описываем, что будет содержать User
    password: {
        type: String
    },
    username: {
        type: String,
        unique: true // юзернэйм уникальный
    },
    role: {
        type: String,
        default: 'user' // может быть админ, модератор, и т.д.
    }
}, {autoCreate: true})

const User = mongoose.model('users', schema)
module.exports = User