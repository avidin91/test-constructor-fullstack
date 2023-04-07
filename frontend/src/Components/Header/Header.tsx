import React from 'react';
import logo from '../../img/logo.png';
import Logo from "../Logo/Logo";
import {NavLink} from "react-router-dom";
import {AppBar, Box, Button, Slide, Toolbar, useScrollTrigger} from "@mui/material";
import classes from './header.module.css';

interface Props {
    window?: () => Window;
    children: React.ReactElement;
}

function HideOnScroll(props: Props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const Header = () => {
    return (
        <HideOnScroll>
            <AppBar sx={{background: 'rgb(51, 66, 91)'}}>
                <Toolbar>
                    <NavLink to="/">
                        <img src={logo} alt="Logo" className={classes.imgStyle}/>
                    </NavLink>
                    <Box sx={{width: 300}}>
                        <p className={classes.descriptor}>Конструктор тестов и опросов для самостоятельной
                            подготовки</p>
                        <Button sx={{m: '0 5px 5px 5px'}} variant="contained"
                                size="small" color="success">Каталог</Button>
                        <Button sx={{m: '0 0 5px 5px'}} component={NavLink}
                                to={'/tests-constructor'} variant="contained"
                                size="small" color="success">Создать тест</Button>
                    </Box>
                    <Logo text={'TESTCUBE'}/>
                    <Box sx={{width: 390}}>
                        <Box sx={{ float: 'right',}}>
                            <Button variant="outlined" sx={{color: 'white',
                                '&:hover': {border: '2px solid white'},
                                borderColor: 'white'}}>Регистрация</Button>
                            <Button variant="outlined" sx={{ml: '10px', color: 'white',
                                '&:hover': {border: '2px solid white'},
                                borderColor: 'white', }}>Вход</Button>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
};

export default Header;