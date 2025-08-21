import {Input} from "../../Input/Input.tsx";
import type {ErrorCounter, SettingsType} from "../../app/App.tsx";
import cn from './DisplaySettings.module.css'

export type Props = {
    settings: SettingsType
    settingModeError: ErrorCounter
    onCnangeMaxValue: (maxValue: number) => void
    onCnangeStartValue: (startValue: number) => void
}

export const DisplaySettings = (
    {
        settings,
        settingModeError,
        onCnangeMaxValue,
        onCnangeStartValue,
    }: Props) => {
    return (
        <div className={cn.container}>
            <Input
                labelText="max value:"
                value={settings.maxValue}
                onChange={onCnangeMaxValue}
                error={settingModeError}
            />
            <Input
                labelText="start value:"
                value={settings.startValue}
                onChange={onCnangeStartValue}
                error={settingModeError}
            />
        </div>
    );
};