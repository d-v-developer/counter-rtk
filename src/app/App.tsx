import './App.css'
import {useState} from "react";
import {Counter} from "../Counter/Counter.tsx";
import {Settings} from "../Settings/Settings.tsx";
import {useAppSelector} from "../common/hooks/useAppSelector.ts";
import {useAppDispatch} from "../common/hooks/useAppDispatch.ts";
import {incrementAC, resetAC} from "../model/counter-reducer.ts";
import {changeMaxValueAC, changeStartValueAC, setAC} from "../model/settings-reducer.ts";

export type SettingsType = {
    startValue: number;
    maxValue: number;
}

export type ErrorCounter = boolean | null

function App() {

    //COUNTER
    const count = useAppSelector(state => state.counter.count)
    const errorCounter = useAppSelector(state => state.counter.error)

    //SETTINGS
    const settingMode = useAppSelector(state  => state.settings.isSettingMode)
    // const maxValueSettings = useAppSelector(state => state.settings.maxValue)
    // const startValueSettings = useAppSelector(state => state.settings.startValue)
    const settingModeError = useAppSelector(state => state.settings.errorSettings)

    const dispatch = useAppDispatch();

    const [settings, setSettings] = useState<SettingsType>({
        startValue: 2,
        maxValue: 5,
    });
    // const [count, setCount] = useState(settings.startValue);
    // const [errorCounter, setErrorCounter] = useState<ErrorCounter>(null)
    // const [maxValueInput, setMaxValueInput] = useState<number>(settings.maxValue);
    // const [startValueInput, setStartValueInput] = useState<number>(settings.startValue);
    // const [settingMode, setSettingMode] = useState(false)
    // const [settingModeError, setSettingModeError] = useState<ErrorCounter>(null)

    const onClickIncrement = () => {
        dispatch(incrementAC())
    }
    const onClickReset = () => {
        dispatch(resetAC())
    }
    const onClickSet = () => {
        dispatch(setAC())
        // const newSettings = {startValue: startValueInput, maxValue: maxValueInput}
        // setSettings(newSettings);
        // setCount(newSettings.startValue)
        // setSettingMode(false)
    }

    const onChangeMaxValue = (maxValue: number) => {
        dispatch(changeMaxValueAC({maxValue}))
    }

    const onChangeStartValue = (startValue: number) => {
        dispatch(changeStartValueAC({startValue}))
    }

    return (
        <div className={'container'}>
            <Settings
                settings={settings}
                settingModeError={settingModeError}
                onCnangeMaxValue={onChangeMaxValue}
                onCnangeStartValue={onChangeStartValue}
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
