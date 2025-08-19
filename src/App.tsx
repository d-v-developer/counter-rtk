import './App.css'
import {useState} from "react";
import {Counter} from "./Counter/Counter.tsx";
import {Input} from "./Input/Input.tsx";
import {Settings} from "./Settings/Settings.tsx";

export type SettingsType = {
    startValue: number;
    maxValue: number;
}

export type ErrorCounter = boolean | null

function App() {

    const [settings, setSettings] = useState<SettingsType>({
        startValue: 2,
        maxValue: 5,
    });
    const [count, setCount] = useState(settings.startValue);
    const [errorCounter, setErrorCounter] = useState<ErrorCounter>(null)

    const onClickIncrement = () => {
        if (count >= settings.maxValue - 1) {
            setErrorCounter(true);
        }
        setCount(count + 1);
    }
    const onClickReset = () => {
        setCount(settings.startValue)
        setErrorCounter(null);
    }

    return (
        <div className={'container'}>
            <Settings settings={settings} />
            <Counter
                count={count}
                errorCounter={errorCounter}
                increaseCounter={onClickIncrement}
                resetCounter={onClickReset}
            />
        </div>
    )
}

export default App
