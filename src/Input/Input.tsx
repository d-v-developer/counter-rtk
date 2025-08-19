import cn from './Input.module.css'
import {type ChangeEvent, useState} from "react";
import type {ErrorCounter} from "../App.tsx";

export type Props = {
    labelText: string
    value: number
    onChange: (value: number) => void
    error: ErrorCounter
}

export const Input = (
    {
        labelText,
        value,
        onChange,
        error,
    }: Props) => {

    const [valueInput, setValueInput] = useState(value)

    const onCnangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.currentTarget.value)
        setValueInput(newValue)
        onChange(newValue)
    }

    return (
        <div className={cn.inputContainer}>
            <label htmlFor="inputSettings">{labelText}</label>
            <input
                type={'number'}
                id={"inputSettings"}
                value={valueInput}
                onChange={onCnangeHandler}
                className={error ? cn.inputError : cn.input}/>
        </div>
    );
};