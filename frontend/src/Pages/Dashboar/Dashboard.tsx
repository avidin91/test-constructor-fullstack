import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import axios from "axios";

interface serverHost {
    server_host: string
}
const Dashboard = ({server_host}:serverHost) => {

    const [loading, setLoading] = useState(true);
    const [needAuth, setNeedAuth] = useState(false)
    const [user, setUser] = useState({})

    useEffect(() => {
        (async () => {
            await checkAuth()
        })()
    }, [])

    async function checkAuth() {
        console.log('Айпи ауф', server_host + '/users/check/auth')
        const res = await fetch(server_host + '/users/check/auth', { // Пускаем на страницу только авторизованных пользователей
            method: 'post',
            credentials: 'include'
        })
        const data = await res.json()
        console.log('data', data)
        if (data.ok) {
            setLoading(false)
            await loadData()
        } else {
            setNeedAuth(true)
            setLoading(false)
        }
    }

    // async function checkAuth() {
    //     try {
    //         const response = await axios.post(`${server_host}/users/check/auth`, {}, {
    //             withCredentials: true,
    //         });
    //         const data = response.data;
    //         console.log('data', data);
    //         if (data.ok) {
    //             setLoading(false);
    //             await loadData();
    //         } else {
    //             setNeedAuth(true);
    //             setLoading(false);
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    async function loadData() {
        const res = await fetch(server_host + '/users/me', { // Пускаем на страницу только авторизованных пользователей
            method: 'get',
            credentials: 'include'
        })
        const data = await res.json()
        if (data.ok) {
            setUser(data.user)
        }
    }

    if (loading) {
        return (
            <div className={'mt-24'}>
                <h1>
                    Загрузка
                </h1>
            </div>
        )
    }

    if (needAuth) {
        return (
            <div className={'mt-24'}>
                <h1>Необходимо войти</h1>
                <div><NavLink to={'/login'}>Перейти на форму входа</NavLink></div>
            </div>
        )
    }

    return (
        <div className={'mt-24'}>
            <h1>Личный кабинет</h1>
            <div>{JSON.stringify(user)}</div>
            <span><a href={server_host + '/users/logout'}>Выход</a></span>
        </div>
    );
};

export default Dashboard;