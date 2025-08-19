import cn from './DisplayCounter.module.css'

export type Props = {
    count: number
}

export const DisplayCounter = ({count}: Props) => {
    return (
        <div className={cn.container}>
            <span className={cn.span}>{count}</span>
        </div>
    );
};