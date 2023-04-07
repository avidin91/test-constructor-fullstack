import React from 'react';
import classes from "./ConstructorButton.module.css";
import {useDispatch} from "react-redux";
import {addQuestion, addAnswer, removeAnswer} from "../../../store/testConstructorStore/testConstructorSlice";

// Кмпонента ConstructorButton - переиспользуемая кнопка.
const ConstructorButton = (props) => {

    const dispatch = useDispatch();

    // Функция filterButtons определяет какие функции пришли просы. Эта кнопка используется как макет кнопки в рахных местах.
    const filterButtons = function (e) {
        const questionId = props.questionId
        const targetId = e.target.id
        if (e.target.textContent === 'Добавить ответ') {
            return dispatch(addAnswer(e.target.id))
        } if (e.target.textContent === 'Удалить') {
            return dispatch(removeAnswer({targetId, questionId}))
        } if (e.target.textContent === 'Добавить вопрос') {
            return dispatch(addQuestion())
        }
    }

    return (
            <div className={classes.questionAdd}  onClick={filterButtons}>
                <p
                    id={props.id}
                >
                    {props.text}
                </p>
            </div>
    );
};

export default ConstructorButton;