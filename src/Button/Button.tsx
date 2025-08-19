import cn from './Button.module.css'

export type Props = {
    text: string
    callback?: () => void
}

export const Button = ({ text, callback }: Props) => {

    return (
        <button className={cn.btn} onClick={callback}>
            {text}
        </button>
    )
}