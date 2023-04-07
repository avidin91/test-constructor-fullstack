import React from 'react';
import classes from "./EnterButton.module.css";

const EnterButton = (props) => {
    return (
        <div className={classes.button}>
            <p>{props.text}</p>
        </div>
    );
};

export default EnterButton;