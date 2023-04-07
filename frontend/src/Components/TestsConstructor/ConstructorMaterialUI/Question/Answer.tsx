import React from 'react';
import {Box, Button, TextareaAutosize} from "@mui/material";
import {AnswerInterface} from "../../../../models";
import {useAlphabet} from "../../../../hooks/useAlphabet";
import {useAppDispatch} from "../../../../hooks";
import {changeValueText, changeWhatAnswerIsCorrect} from "../../../../store/testConstructorStore/testConstructorSlice";

interface AnswerProps {
    key: number,
    answer: AnswerInterface,
    multipleAnswers: boolean,
    questionId: number
}

const Answer = ({answer, multipleAnswers, questionId}:AnswerProps) => {
    const dispatch = useAppDispatch();

    return (
        <>
            <Box className={'flex items-center '}>
                <Box className={'mr-3 text-right'} >
                    <input type={multipleAnswers ? 'checkbox' : 'radio'} className={'border-gray-300 text-button-blue shadow-sm focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50 m-0'}
                           checked={answer.isCorrect}
                           onChange={(event) => dispatch(changeWhatAnswerIsCorrect({questionId, targetId: answer.id, checked: event.target.checked}))}
                    />
                    <p className={'font-sans text-right'}>{useAlphabet(answer.id)}</p>
                    <p className={`font-sans ${answer.isCorrect && 'font-bold'} w-28`}>{answer.isCorrect ? 'Правильный' : 'Неправильный'}</p>
                </Box>
                <TextareaAutosize
                    className={'rounded-md border-gray-300 shadow-sm mt-1 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mt-3 w-full'}
                    minRows={3}
                    cols={62}
                    style={{resize: 'none'}}
                    placeholder={answer.placeholderText}
                    value={answer.valueText}
                    onChange={(event) => dispatch(changeValueText({targetId: answer.id, targetValue: event.target.value, questionId}))}
                />
                <Button variant="text" color="error" sx={{marginLeft: '5px'}}>Удалить</Button>
            </Box>
        </>
    );
};

export default Answer;