import React from 'react';
import classes from "./Footer.module.css";
import logo from '../../img/logo.png';
import {NavLink} from "react-router-dom";
import {Box} from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{
            background: 'rgb(51, 66, 91)',
            display: 'flex',
            flexDirection: 'row',
            p: '10px',
            marginTop: '20px',
            justifyContent: 'center',
            width: 1,

        }}
        className={classes.aaa}
        >
            <Box>
                <NavLink to="/">
                    <img className={classes.logo} src={logo} alt="Logo"/>
                </NavLink>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginLeft: '20px'}}>
                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <NavLink to="">О компании</NavLink>
                        <NavLink to="">О проекте</NavLink>
                        <NavLink to="">Обратная связь</NavLink>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', marginLeft: '40px'}}>
                        <NavLink to="">Как создать тест</NavLink>
                        <NavLink to="">Правила размещения</NavLink>
                        <NavLink to="">Политика конфиденциальности</NavLink>
                    </Box>
                </Box>
                <Box sx={{paddingTop: '25px'}}>
                    <NavLink to="">Пользовательское соглашение</NavLink>
                </Box>
            </Box>

        </Box>
    );
};

export default Footer;