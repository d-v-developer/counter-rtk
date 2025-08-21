import {createAction, createReducer} from "@reduxjs/toolkit";
import type {ErrorCounter} from "../app/App.tsx";

type initialState = {
    count: number
    startValue: number
    maxValue: number,
    error: ErrorCounter
}

export const incrementAC = createAction("counter/increment");

const initialState: initialState = {
    count: 0,
    startValue: 0,
    maxValue: 5,
    error: null
}

export const counterReducer = createReducer(initialState, builder => {
    builder
        .addCase(incrementAC, state => {
            if (state.count >= state.maxValue - 1) {
                state.error = true
            }
            state.count++

            // if (count >= settings.maxValue - 1) {
            //     setErrorCounter(true);
            // }
            // setCount(count + 1);
        })
})