import cn from './Input.module.css'

export type Props = {
    labelText: string
    value: number
}

export const Input = ({ labelText, value }: Props) => {
    return (
        <div className={cn.inputContainer}>
            <label htmlFor="inputSettings">{labelText}</label>
            <input type={'number'} id={"inputSettings"} value={value}/>
        </div>
    );
};