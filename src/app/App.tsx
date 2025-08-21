import './App.css'
import {useState} from "react";
import {Counter} from "../Counter/Counter.tsx";
import {Settings} from "../Settings/Settings.tsx";
import {useAppSelector} from "../common/hooks/useAppSelector.ts";
import {useAppDispatch} from "../common/hooks/useAppDispatch.ts";
import {incrementAC} from "../model/counter-reducer.ts";

export type SettingsType = {
    startValue: number;
    maxValue: number;
}

export type ErrorCounter = boolean | null

function App() {

    const count = useAppSelector(state => state.counter.count)
    const errorCounter = useAppSelector(state => state.counter.error)
    const dispatch = useAppDispatch();

    const [settings, setSettings] = useState<SettingsType>({
        startValue: 2,
        maxValue: 5,
    });
    // const [count, setCount] = useState(settings.startValue);
    // const [errorCounter, setErrorCounter] = useState<ErrorCounter>(null)
    const [maxValueInput, setMaxValueInput] = useState<number>(settings.maxValue);
    const [startValueInput, setStartValueInput] = useState<number>(settings.startValue);
    const [settingMode, setSettingMode] = useState(false)
    const [settingModeError, setSettingModeError] = useState<ErrorCounter>(null)

    const onClickIncrement = () => {
        dispatch(incrementAC())
    }
    const onClickReset = () => {
        setCount(settings.startValue)
        setErrorCounter(null);
    }
    const onClickSet = () => {
        const newSettings = {startValue: startValueInput, maxValue: maxValueInput}
        setSettings(newSettings);
        setCount(newSettings.startValue)
        setSettingMode(false)
    }

    const checkSettingsError = (maxValue: number, startValue: number) => {
        if (maxValue <= startValue || startValue < 0) {
            setSettingModeError(true)
        } else setSettingModeError(false)
    }

    const onCnangeMaxValue = (maxValue: number) => {
        setMaxValueInput(maxValue);
        if (!settingMode) {
            setSettingMode(true)
        }
        checkSettingsError(maxValue, startValueInput)
    }
    const onCnangeStartValue = (startValue: number) => {
        setStartValueInput(startValue);
        if (!settingMode) {
            setSettingMode(true)
        }
        checkSettingsError(maxValueInput, startValue)
    }

    return (
        <div className={'container'}>
            <Settings
                settings={settings}
                settingModeError={settingModeError}
                onCnangeMaxValue={onCnangeMaxValue}
                onCnangeStartValue={onCnangeStartValue}
                onClickSet={onClickSet}
            />
            <Counter
                count={count}
                settingMode={settingMode}
                settingModeError={settingModeError}
                errorCounter={errorCounter}
                increaseCounter={onClickIncrement}
                resetCounter={onClickReset}
            />
        </div>
    )
}

export default App
