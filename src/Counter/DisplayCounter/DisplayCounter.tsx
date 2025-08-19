import cn from './DisplayCounter.module.css'
import type {ErrorCounter} from "../../App.tsx";

export type Props = {
    count: number
    errorCounter: ErrorCounter
}

export const DisplayCounter = ({ count, errorCounter }: Props) => {
    return (
        <div className={cn.container}>
            <span className={errorCounter ? cn.spanError : cn.span}>{count}</span>
        </div>
    );
};