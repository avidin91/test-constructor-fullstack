import React from 'react';
import {Box, Button, Container, Switch, TextareaAutosize} from "@mui/material";
import QuestionMUI from "./Question/QuestionMUI";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {
    addQuestion,
    changeTimeInTimer,
    changeTitleText,
    setTimer
} from "../../../store/testConstructorStore/testConstructorSlice";

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const ConstructorMaterialUi = () => {
    const testState = useAppSelector((state) => state.testConstructorStore)
    const dispatch = useAppDispatch();

    return (
        <Container maxWidth="xl" sx={{paddingTop: 19, minHeight: '100vh'}}  className={'border-l border-r border-b-gray-300'}>
            <p className={'text-center font-bold text-3xl'}>Консутруктор тестов</p>
            <Box className={'border rounded p-5 shadow-2xl m-5 bg-white'}>
                <p className={'text-center font-bold text-xl'}>Заполните поля для составления теста</p>
                <Box >
                    <Box>
                        <p className={'font-sans'}>Введите название теста</p>
                        <Box className={'w-1/2'}>
                            <TextareaAutosize
                                className={'rounded-md border-gray-300 shadow-sm mt-1 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full'}
                                minRows={1}
                                style={{resize: 'none'}}
                                placeholder={testState.testTitlePlaceholder}
                                value={testState.testTitleText}
                                onChange={(event) => dispatch(changeTitleText({text: event.target.value}))}
                            />
                        </Box>

                        <Box className={'flex mt-1 mb-5 flex-col'}>
                            <Box className={'flex'}>
                                <Switch {...label}
                                        checked={testState.forTime}
                                        onChange={(event) => dispatch(setTimer({checked: event.target.checked}))}
                                        size="small"/>
                                <p className={'font-sans'}>Тест на время</p>
                            </Box>
                            {testState.forTime && (
                                <Box>
                                    <input type="time"
                                    onChange={(event) => dispatch(changeTimeInTimer({time: event.target.value}))}
                                    />
                                </Box>
                            )}
                        </Box>
                        {testState.questions.map(question => <QuestionMUI
                        key={question.id}
                        question={question}
                        placeholder={testState.testTitlePlaceholder}
                        title={testState.testTitleText}
                        numberOfQuestions={testState.questions.length}
                        timer={testState.timer}
                        />)}
                    </Box>
                </Box>
                <Box className={'text-center mt-5'}>
                    <Button variant="outlined" color="success"
                            onClick={() => dispatch(addQuestion())}
                    >Добавить вопрос</Button>
                </Box>
            </Box>
        </Container>
    );
};

export default ConstructorMaterialUi;