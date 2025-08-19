import cn from './DisplayCounter.module.css'
import type {ErrorCounter} from "../../App.tsx";

export type Props = {
    count: number
    errorCounter: ErrorCounter
    settingMode: boolean
    settingModeError: ErrorCounter
}

export const SETTINGS_TEXT = "enter values and press 'set'"
export const SETTINGS_ERROR = "Incorrect value!"

export const DisplayCounter = (
    {
        count,
        errorCounter,
        settingMode,
        settingModeError,
    }: Props) => {
    return (
        <div className={cn.container}>
            {settingMode &&
                <span
                    className={settingModeError ? cn.spanSettingsError : cn.spanSettings}
                >
                    {settingModeError ? SETTINGS_ERROR : SETTINGS_TEXT}
                </span>
            }
            {!settingMode &&
                <span
                    className={errorCounter ? cn.spanError : cn.span}
                >
                    {count}
                </span>
            }
            {!settingMode && <span>{count}</span>}
            {/*<span className={*/}
            {/*    errorCounter ?*/}
            {/*        cn.spanError : settingMode ?*/}
            {/*            settingModeError cn.spanSettings : cn.span}>{settingMode ? SETTINGS_TEXT : count}</span>*/}
        </div>
    );
};