import './App.css'
import {Counter} from "../Counter/Counter.tsx";
import {Settings} from "../Settings/Settings.tsx";
import {useAppSelector} from "../common/hooks/useAppSelector.ts";
import {useAppDispatch} from "../common/hooks/useAppDispatch.ts";
import {applySettingsAC, incrementAC, resetAC} from "../model/counter-reducer.ts";
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
    const maxValueSettings = useAppSelector(state => state.settings.maxValue)
    const startValueSettings = useAppSelector(state => state.settings.startValue)
    const settingModeError = useAppSelector(state => state.settings.errorSettings)

    const dispatch = useAppDispatch();

    const settings = {
        startValue: startValueSettings,
        maxValue: maxValueSettings,
    };

    const onClickIncrement = () => {
        dispatch(incrementAC())
    }
    const onClickReset = () => {
        dispatch(resetAC())
    }
    const onClickSet = () => {
        dispatch(setAC())
        dispatch(applySettingsAC({maxValue: maxValueSettings, startValue: startValueSettings}))
    }

    const onChangeMaxValue = (maxValue: number) => {
        dispatch(resetAC())
        dispatch(changeMaxValueAC({maxValue}))
    }

    const onChangeStartValue = (startValue: number) => {
        dispatch(resetAC())
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
