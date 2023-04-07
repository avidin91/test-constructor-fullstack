import React from 'react';
import classes from "./TestsConstructor.module.css";
import Constructor from "./Constructor/Constructor";

// Компонента TestsConstructor отрисовывает окно конструктора тестов полностью, включая окноп предварительного просмотра
const TestsConstructor = () => {
    return (
        <div className={classes.main}>
            <p className={classes.mainP} style={{paddingTop: '60px'}}>
                Конструктор тестов
            </p>
            <div className={classes.position}>
                <Constructor/>
            </div>
        </div>
    );
};

export default TestsConstructor;