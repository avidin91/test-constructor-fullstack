// С помощью этого сервиса мы будет проверять подключение к БД
const mongoose = require('mongoose');

async function dbConnect() {
    if (mongoose.connection.readyState == 1) { //Если соединение существует
        return mongoose.connection.db; //Значит оно будет возвращаться в другой сервис
    }

    let url = 'mongodb://localhost:27017/microai'; // Если соединения нет, то будем пытаться подключиться к БД
    let options = {
        user: 'admin5',
        pass: 'qwerty5nero',
        auth: {authSource: 'microai'}, // Ресурс, где мы будем искать юзера для подключения
        family:4
    }

    return mongoose.connect(url, options).then(
        () => {console.log('БД подключена')},
        (e)=>console.error(e)
    ); // Конец подключения к БД
}

module.exports = dbConnect;
