import {createAction, createReducer} from "@reduxjs/toolkit";
import type {ErrorCounter} from "../app/App.tsx";

type initialState = {
    count: number
    startValue: number
    maxValue: number,
    error: ErrorCounter
}

export const incrementAC = createAction("counter/increment");
export const resetAC = createAction("counter/reset");
export const applySettingsAC = createAction<{maxValue: number, startValue: number}>("counter/applySettings");

const initialState: initialState = {
    count: 2,
    startValue: 2,
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
        })
        .addCase(resetAC, state => {
            state.count = state.startValue;
            state.error = null;
        })
        .addCase(applySettingsAC, (state, action) => {
            state.maxValue = action.payload.maxValue;
            state.count = action.payload.startValue;
            state.startValue = action.payload.startValue;
        })
})