import React, {useEffect, useState} from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [test, setTest] = useState([]);

    useEffect(loadUsers, [])
    useEffect(loadTest, [])

    function loadUsers() { // загружаем всех юзеров
        fetch('http://localhost:9000/users/get/users', {
            method: 'get',
            credentials: 'include'
        }).then(res => {
            return res.json()
        }).then(data => {
            if (data.ok) {
                setUsers(data.users)
            }
            console.log(data)
        })
    }

    function loadTest() { // загружаем всех юзеров
        fetch('http://localhost:9000/users/test', {
            method: 'get',
            credentials: 'include'
        }).then(res => {
            return res.json()
        }).then(data => {
            if (data.ok) {
                setTest(data)
            }
            console.log(data)
        })
    }

    return (
        <div>
            <h1 className={'mt-24'}>
                Пользователи
            </h1>
            <div>{JSON.stringify(users)}</div>
            <div>{JSON.stringify(test)}</div>
        </div>
    );
};

export default Users;