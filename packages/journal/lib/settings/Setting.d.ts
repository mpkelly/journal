import React from "react";
import { FlexProps } from "udx-react";
export interface SettingProps extends FlexProps {
    value: any;
    label: string;
    onChange(value: any): any;
    description?: string;
}
export declare const Setting: React.MemoExoticComponent<(props: SettingProps) => JSX.Element>;
