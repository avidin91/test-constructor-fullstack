import React, {useState} from 'react';
import EmailValidator from 'email-validator';
import {useNavigate} from "react-router-dom";

interface serverHost {
    server_host: string
}

const Signup = ({server_host}:serverHost) => {

    const [user, setUser] = useState({email: '', password: ''})
    const [secondPassword, setSecondPassword] = useState('')
    const [message, setMessage] = useState('')
    const [disabled, setDisabled] = useState(false)

    const navigate = useNavigate()

    function changeUser(name:any, value:any) {
        setUser({
            ...user,
            [name]: value
        })
    }

    async function signUp() {
        setDisabled(true)
        setMessage('')
     if (!user.email || !user.password || !secondPassword) {
        setMessage('Заполните все поля')
         setDisabled(false)
         return;
     }
     if (user.password !== secondPassword) {
         setMessage('Пароли не совпадают')
         setDisabled(false)
         return;
     }
     if (!EmailValidator.validate(user.email)) {
         setMessage('Email введён некорректно')
         setDisabled(false)
         return;
     }

     const res = await fetch(server_host + '/users/signup', { // res - ответ, который придёт в backend
         method: 'post',
         credentials: 'include',
         body: JSON.stringify(user), // приводит json объект user к состоянию строки
         headers: {
             'Content-Type': 'application/json' // теперь backend будет понимать, что в ответе лежит объект в формате json
         }
     })
        const data = await res.json(); // с backend придёт тело ответа, и мы должны распарсить его в json. Если не написать await, к нам придёт не json, а promise
        if (data.ok) {
            setMessage('Регистрация прошла успешно. Сейчас вы будете перенаправлены в личный кабинет')
            navigate('/dashboard')
        } else {
            setDisabled(false)
            setMessage('Ошибка. Попробуйте другие данные.')
        }
    }

    return (
        <div className={'mt-24'}>
            <h1>
                Регистрация
            </h1>
            {/*сюда будем выводить ошибки*/}
            <div>{message}</div>
            <form action="src/Pages/Signup/Signup">
                <div className={'flex flex-col'}>
                    <label htmlFor="">Email</label>
                    <input type={"text"} name={'email'} onChange={e => changeUser('email', e.target.value)} value={user.email}/>
                </div>
                <div className={'flex flex-col'}>
                    <label htmlFor="">Пароль</label>
                    <input type={"password"} onChange={e => changeUser('password', e.target.value)} value={user.password}/>
                </div>
                <div className={'flex flex-col'}>
                    <label htmlFor="">Подтвердите пароль</label>
                    <input type={"password"} onChange={e => setSecondPassword(e.target.value)}/>
                </div>
                <div>
                    <button type={'button'} className={'rounded-sm border-2'} onClick={signUp} disabled={false}>Зарегистрироваться</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;