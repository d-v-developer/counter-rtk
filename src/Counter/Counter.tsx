import {DisplayCounter} from "./DisplayCounter/DisplayCounter.tsx";
import {Button} from "../Button/Button.tsx";
import cn from './Counter.module.css'
import type {ErrorCounter} from "../App.tsx";

export type Props = {
    count: number
    errorCounter: ErrorCounter
    increaseCounter: () => void
    resetCounter: () => void
}


export const Counter = ({count, errorCounter, increaseCounter, resetCounter}: Props) => {
    return (
        <div className={cn.container}>
            <DisplayCounter count={count} errorCounter={errorCounter}/>
            <div className={cn.btnArea}>
                <Button text='inc' callback={increaseCounter} errorCounter={errorCounter}/>
                <Button text='reset' callback={resetCounter}/>
            </div>
        </div>
    );
};