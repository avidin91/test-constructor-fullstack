import {configureStore} from "@reduxjs/toolkit";
import onlineTestsSlice from "./mainScreenStore/onlineTestsSlice";
import testConstructorSlice from "./testConstructorStore/testConstructorSlice";

export const store =  configureStore({
    reducer: {
        onlineTestsStore: onlineTestsSlice,
        testConstructorStore: testConstructorSlice,

    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch