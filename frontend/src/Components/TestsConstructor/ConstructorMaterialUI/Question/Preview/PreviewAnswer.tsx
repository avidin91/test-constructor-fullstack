import React from 'react';
import {AnswerInterface} from "../../../../../models";
import {useAlphabet} from "../../../../../hooks/useAlphabet";

interface PreviewAnswerInterface {
    answer: AnswerInterface,
    key: number,
    multipleAnswers: boolean
}

const PreviewAnswer = ({answer, multipleAnswers}:PreviewAnswerInterface) => {



    return (
        <div className={'flex mt-2'}>
            <input type={multipleAnswers ? 'checkbox' : 'radio'} className={'m-1'} disabled/>
            <p className={'ml-1 mr-1 font-sans'}>{useAlphabet(answer.id)}</p>
            <p className={'font-sans whitespace-normal break-all'}>{answer.valueText ? answer.valueText : answer.placeholderText.replace('Например:', '')}</p>
        </div>
    );
};

export default PreviewAnswer;