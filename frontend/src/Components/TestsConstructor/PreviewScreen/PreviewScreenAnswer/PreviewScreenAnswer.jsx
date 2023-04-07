import React from 'react';
import classes from "./PreviewScreenAnswer.module.css";

// Компонента PreviewScreenAnswer отвечает за блок вопросв в окне предварительного просмотра

const PreviewScreenAnswer = (props) => {
    // Функция number присваивает букву в зависимости от пришедшего значения id
    const number = function() {
        if (props.id === 1) {
            return 'а)'
        } if (props.id === 2) {
            return 'б)'
        } if (props.id === 3) {
            return 'в)'
        } if (props.id === 4) {
            return 'г)'
        } if (props.id === 5) {
            return 'д)'
        } if (props.id === 6) {
            return 'е)'
        } if (props.id === 7) {
            return 'ж)'
        } if (props.id === 8) {
            return 'з)'
        }
    }

    // Функция text проверяет есть ли текст, и если его нет, то показывает текст из плейсхолдера
    const text = function () {
        if (props.valueText === '') {
            return props.placeholderText
        } else {
            return props.valueText
        }
    }

    return (
        <div className={classes.answer}>
            <input type={props.typeOfAnswers} id="" name='question1'/>
            <div className={classes.answerText}>
                <p>
                    {number()} {text()}
                </p>
            </div>
        </div>
    );
};

export default PreviewScreenAnswer;