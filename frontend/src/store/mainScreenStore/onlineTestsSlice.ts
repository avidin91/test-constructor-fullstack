import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "../index";
import logo from "../../img/logos-for-tests/orig.png";

interface ObjectOfOnlineTestMainScreenState {
    title: string,
    author: string,
    logo: string,
    price: string,
    inFavorites: boolean,
    likesQty: number,
    doneQty: number,
    commentsQty: number
}

interface OnlineTestMainScreenState {
    value: ObjectOfOnlineTestMainScreenState[]
}

const initialState: OnlineTestMainScreenState = {
    value: [
        {
            title: '1С Программист для начинающих',
            author: 'Антоний Бандерос',
            logo,
            price: 'free',
            inFavorites: false,
            likesQty: 12,
            doneQty: 3,
            commentsQty: 1
        },
        {
            title: '1С Программист для начинающих',
            author: 'Антоний Бандерос',
            logo,
            price: 'free',
            inFavorites: false,
            likesQty: 12,
            doneQty: 3,
            commentsQty: 1
        },
        {
            title: '1С Программист для начинающих',
            author: 'Антоний Бандерос',
            logo,
            price: '1200',
            inFavorites: false,
            likesQty: 12,
            doneQty: 3,
            commentsQty: 1
        },
        {
            title: '1С Программист для начинающих',
            author: 'Антоний Бандерос',
            logo,
            price: 'free',
            inFavorites: false,
            likesQty: 12,
            doneQty: 3,
            commentsQty: 1
        },
        {
            title: '1С Программист для начинающих',
            author: 'Антоний Бандерос',
            logo,
            price: 'free',
            inFavorites: false,
            likesQty: 12,
            doneQty: 3,
            commentsQty: 1
        },
        {
            title: '1С Программист для начинающих',
            author: 'Антоний Бандерос',
            logo,
            price: '500',
            inFavorites: false,
            likesQty: 12,
            doneQty: 3,
            commentsQty: 1
        },
    ]
}

const onlineTests = createSlice({
    name: 'mainScreenState',
    initialState,
    reducers: {},
})


// export const selectCount = (state: RootState) => state.counter.value
export default onlineTests.reducer;