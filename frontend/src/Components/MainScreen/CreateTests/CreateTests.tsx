import React from 'react';
import classes from "./CreateTests.module.css";
import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";

const CreateTest = () => {
    return (
        <div className={classes.main}>
            <div className={classes.title}>
                <p>
                    Создавайте свои тесты
                </p>
            </div>
            <div className={classes.description}>
                <p>
                    Хотите подготовиться к экзамену? Или просто лучше изучить материал? <br />
                    <br />
                    Создайте свой тест, и начинайте готовиться уже сейчас. <br />
                    <br />
                    В конструкторе тест можно создать нужно количество вопросов. На каждый вопрос добавить 4-6 вариантов ответа. Выбрать верный ответ, и при необходимости добавить теоретический материл. <br />
                    <br />
                    Посмотрите короткое видео, как легко создавать тест:
                </p>
            </div>
            <div className={classes.video}>
                Youtube video
                {/*<iframe width="560" height="315" src="https://www.youtube.com/embed/CxgOKJh4zWE"*/}
                {/*        title="YouTube video player" frameBorder="0"*/}
                {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
                {/*        allowFullScreen></iframe>*/}
            </div>
            <div className={classes.button}>
                <Button
                    variant={"contained"}
                    size={"large"}
                    color={"success"}
                    component={NavLink}
                    to={'/tests-constructor'}
                    className={'hover:-translate-y-1 hover:scale-110'}
                >Создать тест</Button>
            </div>
        </div>
    );
};

export default CreateTest;