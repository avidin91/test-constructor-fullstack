import React, {useState} from 'react';
import EmailValidator from 'email-validator';

const Signup = () => {

    const [user, setUser] = useState({email: '', password: ''})
    const [secondPassword, setSecondPassword] = useState('')
    const [message, setMessage] = useState('')

    function changeUser(name:any, value:any) {
        setUser({
            ...user,
            [name]: value
        })
    }

    async function signUp() {
        setMessage('')
     if (!user.email || !user.password || !secondPassword) {
        setMessage('Заполните все поля')
         return;
     }
     if (user.password !== secondPassword) {
         setMessage('Пароли не совпадают')
         return;
     }
     if (!EmailValidator.validate(user.email)) {
         setMessage('Email введён некорректно')
         return;
     }

     const res = await fetch('http://api.microai.ru/users/signup', { // res - ответ, который придёт в backend
         method: 'post',
         body: JSON.stringify(user), // приводит json объект user к состоянию строки
         headers: {
             'Content-Type': 'application/json' // теперь backend будет понимать, что в ответе лежит объект в формате json
         }
     })
        const data = await res.json(); // с backend придёт тело ответа, и мы должны распарсить его в json. Если не написать await, к нам придёт не json, а promise
        console.log(data)
    }

    return (
        <div className={'mt-24'}>
            <h1>
                Регистрация
            </h1>
            {/*сюда будем выводить ошибки*/}
            <div>{message}</div>
            <form action="">
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
                    <button type={'button'} className={'rounded-sm border-2'} onClick={signUp}>Зарегистрироваться</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;