import React from 'react';
import classes from "./PreviewScreen.module.css";
import {useSelector} from "react-redux";
import PreviewScreenAnswer from "./PreviewScreenAnswer/PreviewScreenAnswer";

// Компонента PreviewScreen отображает предварительный просмотр заполненого теста
const PreviewScreen = ({questionId, question}) => {
    const testConstructorState = useSelector(store => store.testConstructorStore)

    // console.log('PreviewScreen перерисовался')
    const answers = question.answers;

    // Функция checkFirstTitle убирает кавычки и слово "Например" из заголовка.
    const checkFirstTitle = function () {
        if (testConstructorState.testTitlePlaceholder === 'Например: «Окружности в математике и геометрии "7 класс"»') {
            return 'Окружности в математике и геометрии «7 класс»'
        } else {
            return testConstructorState.testTitlePlaceholder
        }
    }
    const firstTitle = checkFirstTitle()

    // Функция checkPlaceholder убирает кавычки и слово "Например" из названия вопроса.
    const checkPlaceholder = function () {
        if (question.questionPlaceholder === 'Например: «Что такое число Пи в математике?»') {
            return 'Что такое число Пи в математике?'
        } if (question.questionPlaceholder === 'Например: «Новый вопрос»') {
            return 'Новый вопрос'
        }
    }
    const newPlaceHolder = checkPlaceholder()

    return (
        <div className={classes.previewScreen}>
            <div className={classes.title}>
                <p>
                    {testConstructorState.testTitleText ? testConstructorState.testTitleText : firstTitle}
                </p>
            </div>
            <div className={classes.questionBlock}>
                <div>
                    <p>
                        Вопрос <span>{questionId}</span> из <span>{testConstructorState.questions.length}</span>
                    </p>
                </div>
                <div>
                    <p className={classes.questionTitle}>
                        {question.questionText ? question.questionText : newPlaceHolder}
                    </p>
                </div>
                {answers.map((answer, index) => {
                    return <PreviewScreenAnswer
                        typeOfAnswers={question.typeOfAnswers}
                        questionId={questionId}
                        placeholderText={answer.placeholderText}
                        valueText={answer.valueText}
                        key={index}
                        id={answer.id}/>
                })}
            </div>

        </div>
    );
};

export default PreviewScreen;