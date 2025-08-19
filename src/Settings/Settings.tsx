import {DisplaySettings} from "./DisplaySettings/DisplaySettings.tsx";
import {Button} from "../Button/Button.tsx";
import type {SettingsType} from "../App.tsx";

import cn from './Settings.module.css'

export type Props = {
    settings: SettingsType
}

export const Settings = ({ settings }: Props) => {
    return (
        <div className={cn.container}>
            <DisplaySettings settings={settings} />
            <div className={cn.btnArea}>
                <Button text="set" />
            </div>
        </div>
    );
};