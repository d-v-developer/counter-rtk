import cn from './Button.module.css'
import type {ErrorCounter} from "../App.tsx";

export type Props = {
    text: string
    errorCounter?: ErrorCounter
    callback?: () => void
}

export const Button = ({ text, callback, errorCounter }: Props) => {

    return (
        <button
            className={cn.btn}
            onClick={callback}
            disabled={!!errorCounter}
        >
            {text}
        </button>
    )
}