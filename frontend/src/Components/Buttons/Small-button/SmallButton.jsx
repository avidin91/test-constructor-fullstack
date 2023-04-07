import React from 'react';
import classes from "./SmallButton.module.css";
import {NavLink} from "react-router-dom";

const SmallButton = (props) => {
    return (
        <div className={classes.button}>
            <p>
                <NavLink to={props.link}>{props.text}</NavLink>
            </p>
        </div>
    );
};

export default SmallButton;