import {DisplayCounter} from "./DisplayCounter/DisplayCounter.tsx";
import {Button} from "../Button/Button.tsx";
import cn from './Counter.module.css'

export type Props = {
    count: number
    increaseCounter: () => void
    resetCounter: () => void
}


export const Counter = ({count, increaseCounter, resetCounter}: Props) => {
    return (
        <div className={cn.container}>
            <DisplayCounter count={count}/>
            <div className={cn.btnArea}>
                <Button text='inc' callback={increaseCounter}/>
                <Button text='reset' callback={resetCounter}/>
            </div>
        </div>
    );
};