import {DisplaySettings} from "./DisplaySettings/DisplaySettings.tsx";
import {Button} from "../Button/Button.tsx";
import type {ErrorCounter, SettingsType} from "../App.tsx";

import cn from './Settings.module.css'

export type Props = {
    settings: SettingsType
    settingModeError: ErrorCounter
    onCnangeMaxValue: (maxValue: number) => void
    onCnangeStartValue: (startValue: number) => void
    onClickSet: () => void
}

export const Settings = (
    {
        settings,
        settingModeError,
        onCnangeMaxValue,
        onCnangeStartValue,
        onClickSet
    }: Props) => {
    return (
        <div className={cn.container}>
            <DisplaySettings
                settings={settings}
                settingModeError={settingModeError}
                onCnangeMaxValue={onCnangeMaxValue}
                onCnangeStartValue={onCnangeStartValue}
            />
            <div className={cn.btnArea}>
                <Button text="set" callback={onClickSet}/>
            </div>
        </div>
    );
};