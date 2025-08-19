import './App.css'
import {useState} from "react";
import {Counter} from "./Counter/Counter.tsx";

export type Setting = {
    startValue: number;
    maxValue: number;
}

function App() {

    const [count, setCount] = useState(0);
    // const [settings, setSettings] = useState();

    const onClickIncrement = () => {
        setCount(count + 1);
    }
    const onClickReset = () => {
        setCount(0)
    }

    return (
        <>
            <Counter
                count={count}
                increaseCounter={onClickIncrement}
                resetCounter={onClickReset}
            />
        </>
    )
}

export default App
