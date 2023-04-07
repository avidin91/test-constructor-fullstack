import React from 'react';
import {Box, Button, FormGroup, Switch, TextareaAutosize} from "@mui/material";
import {AnswerInterface, QuestionInterface, TimerInterface} from "../../../../models";
import Answer from "./Answer";
import {
    addAnswer,
    changeQuestionText, changeTheoreticalPartText, checkTheoretical,
    isChecked,
    removeQuestion
} from "../../../../store/testConstructorStore/testConstructorSlice";
import {useAppDispatch} from "../../../../hooks";
import Preview from "./Preview/Preview";

interface QuestionProps {
    key: number,
    question: QuestionInterface,
    placeholder: string,
    title: string,
    numberOfQuestions: number,
    timer: TimerInterface
}

const QuestionMui = ({question, placeholder, title, numberOfQuestions, timer}: QuestionProps) => {
    const dispatch = useAppDispatch();

    return (
        <>
            <Box className={'flex'}>
                <Box className={'rounded-md border border-black p-5 mt-5 w-3/5 mr-5'}>
                    <FormGroup>
                        <Box className={'flex justify-between'}>
                            <Box>
                                <p className={'font-sans font-bold'}>Вопрос {question.id}</p>
                                <p className={'font-sans'}>Введите ваш вопрос:</p>
                            </Box>
                            <Box>
                                <Button variant="text" color="error"
                                        onClick={() => dispatch(removeQuestion({targetId: question.id}))}>Удалить</Button>
                            </Box>
                        </Box>
                        <TextareaAutosize
                            className={'rounded-md border-gray-300 shadow-sm mt-1 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full'}
                            minRows={3}
                            cols={70}
                            style={{resize: 'none'}}
                            placeholder={question.questionPlaceholder}
                            value={question.questionText}
                            onChange={(event) => dispatch(changeQuestionText({
                                id: question.id,
                                text: event.target.value
                            }))}
                        />
                        <p className={'font-bold text-center mt-5'}>Добавьте варианты ответа</p>
                        <Box className={'flex mt-1'}>
                            <Switch inputProps={{'aria-label': 'controlled'}} size="small"
                                    checked={question.multipleAnswers}
                                    onChange={(e) => dispatch(isChecked({
                                        checked: e.target.checked,
                                        questionId: question.id
                                    }))}
                            />
                            <p className={'font-sans'}>Несколько вариантов ответа</p>
                        </Box>
                        <fieldset>
                            {question.answers.map(answer => <Answer
                                key={answer.id}
                                answer={answer}
                                multipleAnswers={question.multipleAnswers}
                                questionId={question.id}
                            />)}
                        </fieldset>
                        <Box className={'m-auto'}>
                            <Button variant="text" color="success"
                                    onClick={() => dispatch(addAnswer({id: question.id}))}
                            >Добавить ответ</Button>
                        </Box>
                        <Box className={'flex mt-1'}>
                            <Switch inputProps={{'aria-label': 'controlled'}}
                                    checked={question.isTheoreticalPart}
                                    size="small"
                                    onChange={(event) => dispatch(checkTheoretical({questionId: question.id, checked: event.target.checked}))}
                            />
                            <p className={'font-sans'}>Добавить теоретическую часть в ответ</p>
                        </Box>
                        {question.isTheoreticalPart &&
                        <TextareaAutosize
                            className={'rounded-md border-gray-300 shadow-sm mt-1 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full'}
                            minRows={3}
                            cols={70}
                            style={{resize: 'none'}}
                            placeholder={question.theoreticalPartPlaceholderText}
                            value={question.theoreticalPartText}
                            onChange={(event) => dispatch(changeTheoreticalPartText({questionId: question.id, text: event.target.value}))}
                        />}
                    </FormGroup>
                </Box>
                <Preview
                    key={question.id}
                    title={title}
                    placeholder={placeholder}
                    question={question}
                    numberOfQuestions={numberOfQuestions}
                    timer={timer}
                />
            </Box>
        </>
    );
};

export default QuestionMui;