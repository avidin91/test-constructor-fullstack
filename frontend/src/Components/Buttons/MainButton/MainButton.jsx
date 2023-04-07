import React from 'react';
import classes from "./MainButton.module.css";
import {NavLink} from "react-router-dom";

const MainButton = (props) => {
    return (
        <div className={classes.button}>
            <p>
                <NavLink to={props.link}>{props.text}</NavLink>
            </p>
        </div>
    );
};

export default MainButton;