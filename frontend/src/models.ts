export interface ICatalogue {
    title: string,
    author: string,
    logo: string,
    price: string,
    inFavorites: boolean,
    likesQty: number,
    doneQty: number,
    commentsQty: number
}

export interface AnswerInterface {
    id: number,
    placeholderText: string,
    valueText: string,
    isCorrect: boolean,
    correctText: string
}

export interface QuestionInterface {
    questionText: string,
    questionPlaceholder: string,
    id: number,
    multipleAnswers: boolean,
    typeOfAnswers: string,
    isTheoreticalPart: boolean,
    theoreticalPartPlaceholderText: string,
    theoreticalPartText: string,
    answers: AnswerInterface[],
}

export interface TimerInterface {
    minutes: number,
    seconds: number
}