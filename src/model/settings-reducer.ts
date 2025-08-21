import {createAction, createReducer} from "@reduxjs/toolkit";
import type {ErrorCounter} from "../app/App.tsx";

export type Settings = {
    startValue: number
    maxValue: number
    errorSettings: ErrorCounter
    isSettingMode: boolean
}

const checkError = (startValue: number, maxValue: number) =>
    maxValue <= startValue || startValue < 0;

export const setAC = createAction("settings/set");
export const changeMaxValueAC = createAction<{ maxValue: number }>("settings/changeMaxValue");
export const changeStartValueAC = createAction<{ startValue: number }>("settings/changeStartValue");

const initialState: Settings = {
    startValue: 2,
    maxValue: 5,
    errorSettings: null,
    isSettingMode: false
}

export const settingsReducer = createReducer(initialState, builder => {
    builder
        .addCase(changeMaxValueAC, (state, action) => {
            state.maxValue = action.payload.maxValue;
            if (!state.isSettingMode) state.isSettingMode = true;
            state.errorSettings = checkError(state.startValue, state.maxValue);
        })
        .addCase(changeStartValueAC, (state, action) => {
            state.startValue = action.payload.startValue;
            if (!state.isSettingMode) state.isSettingMode = true;
            state.errorSettings = checkError(state.startValue, state.maxValue);
        })
        .addCase(setAC, state => {
            state.isSettingMode = false;
            // const newSettings = {startValue: startValueInput, maxValue: maxValueInput}
            // setSettings(newSettings);
            // setCount(newSettings.startValue)
            // setSettingMode(false)
        })
})