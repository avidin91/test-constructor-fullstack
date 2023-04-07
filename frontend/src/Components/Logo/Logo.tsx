import React from 'react';
import classes from "./Logo.module.css";
import {NavLink} from "react-router-dom";

interface LogoText {
    text: string
}

const Logo = ({text}: LogoText) => {
    return (
        <div className={classes.cssModifier}>
            <NavLink to="/">
                <p>{text}</p>
            </NavLink>
        </div>
    );
};

export default Logo;