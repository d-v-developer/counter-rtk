import {DisplayCounter} from "./DisplayCounter/DisplayCounter.tsx";
import {Button} from "../Button/Button.tsx";
import cn from './Counter.module.css'
import type {ErrorCounter} from "../app/App.tsx";

export type Props = {
    count: number
    settingMode: boolean
    settingModeError: ErrorCounter
    errorCounter: ErrorCounter
    increaseCounter: () => void
    resetCounter: () => void
}


export const Counter = (
    {
        count,
        errorCounter,
        increaseCounter,
        resetCounter,
        settingMode,
        settingModeError
    }: Props) => {
    return (
        <div className={cn.container}>
            <DisplayCounter
                count={count}
                errorCounter={errorCounter}
                settingMode={settingMode}
                settingModeError={settingModeError}
            />
            <div className={cn.btnArea}>
                <Button text='inc' callback={increaseCounter} errorCounter={errorCounter || settingMode}/>
                <Button text='reset' callback={resetCounter} errorCounter={settingMode}/>
            </div>
        </div>
    );
};