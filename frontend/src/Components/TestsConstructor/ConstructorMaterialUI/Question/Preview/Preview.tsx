import React from 'react';
import {Box} from "@mui/material";
import {AnswerInterface, QuestionInterface, TimerInterface} from "../../../../../models";
import PreviewAnswer from "./PreviewAnswer";

interface PreviewProps {
    title: string,
    placeholder: string,
    question: QuestionInterface,
    numberOfQuestions: number,
    key: number,
    timer: TimerInterface
}

const Preview = ({title, placeholder, question, numberOfQuestions, timer}: PreviewProps) => {
    return (
        <Box className={'rounded-md border border-black p-5 mt-5 w-2/5 break-words'}>
            <p className={'font-bold text-lg leading-6 text-center '}>{title ? title : placeholder.replace('Например:', '')}</p>
            <Box className={'border rounded-md mt-3'}>
                <Box className={'flex mt-1 ml-3 mr-3 justify-between'}>
                    <Box className={'mt-1'}>{timer.minutes}:{timer.seconds}</Box>
                    <p className={'font-sans'}>Вопрос <span className={'font-bold text-lg font-sans'}>{question.id}</span> из <span className={'font-bold text-lg font-sans'}>{numberOfQuestions}</span></p>
                </Box>
                <Box className={'p-5 mt-3'}>
                    <p className={'text-center font-bold'}>{question.questionText ? question.questionText : question.questionPlaceholder.replace('Например:', '')}</p>
                    <Box>
                        {question.answers.map(answer => {
                            return (
                                <PreviewAnswer
                                    multipleAnswers={question.multipleAnswers}
                                    key={answer.id}
                                    answer={answer}
                                />
                            )
                        })}
                    </Box>
                </Box>
            </Box>

        </Box>
    );
};

export default Preview;