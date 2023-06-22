import React from 'react';
export interface ButtonIconsMainPropType {
    onClick: (event: object) => void;
    placeholder: string;
    children: any;
    isActive: boolean;
    isDark: boolean;
    isUseAlert: boolean;
    alertValue: number;
    isDesktop: boolean;
    to: string;
    className: string;
}
export declare const ButtonIconsMainPropDefault: ButtonIconsMainPropType;
export declare class ButtonIconsMain extends React.Component<ButtonIconsMainPropType> {
    constructor(props: any);
    static defaultProps: ButtonIconsMainPropType;
    onClick: (event: any) => void;
    calculateAlertValue: (value: number) => React.ReactText;
    render(): JSX.Element;
}
