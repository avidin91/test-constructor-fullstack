import React from 'react';
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <span><NavLink to={'/'}>Главная</NavLink></span>
            <span><NavLink to={'/login'}>Вход</NavLink></span>
            <span><NavLink to={'/signup'}>Регистрация</NavLink></span>
            <span><NavLink to={'/users'}>Пользователи</NavLink></span>
        </div>
    );
};

export default Menu;