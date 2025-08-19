import {Input} from "../../Input/Input.tsx";
import type {SettingsType} from "../../App.tsx";
import cn from './DisplaySettings.module.css'

export type Props = {
    settings: SettingsType;
}

export const DisplaySettings = ({ settings }: Props) => {
    return (
        <div className={cn.container}>
            <Input labelText="max value:" value={settings.maxValue} />
            <Input labelText="start value:" value={settings.startValue} />
        </div>
    );
};