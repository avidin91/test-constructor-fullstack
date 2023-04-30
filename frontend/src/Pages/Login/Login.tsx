import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

interface serverHost {
    server_host: string
}

const Login = ({server_host}:serverHost) => {
    const [user, setUser] = useState({email: '', password: ''});
    const [message, setMessage] = useState('');

    const navigate = useNavigate() // Хук из react router для переадресации

    async function login() {
        setMessage('')
        if (!user.email || !user.password) {
            setMessage('Заполните оба поля')
        }
        const res = await fetch(server_host + '/users/login', {
            method: 'post',
            credentials: 'include',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const data = await res.json()
        if (data.ok) {
            setMessage('Сейчас будет выполнена переадресация')
            navigate('/dashboard')
        } else {
            setMessage('Пользователь с такими данными не найден')
        }
    }

    function changeUser(name:any, value:any) {
        setUser({
            ...user,
            [name]: value
        })
    }

    return (
        <div className={'mt-24'}>
            <h1 className={'pt-5'}>
                Вход
            </h1>
            <div>{message}</div>
            <div>
                <form action="">
                    <div>
                        <input type="text" name={'email'} placeholder={'email'} onChange={e => changeUser('email', e.target.value)} value={user.email}/>
                    </div>
                    <div>
                        <input type="password" name={'password'} placeholder={'пароль'} onChange={e => changeUser('password', e.target.value)} value={user.password}/>
                    </div>
                    <button type={"button"} className={'rounded-sm border-2'} onClick={login}>Войти</button>
                </form>
            </div>
        </div>
    );
};

export default Login;