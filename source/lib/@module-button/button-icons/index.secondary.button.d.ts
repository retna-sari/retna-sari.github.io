import React from 'react';
export interface ButtonIconsSecondaryPropType {
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
    leftPlaceholder: string;
    rightPlaceholder: string;
    useLink: boolean;
}
export declare const ButtonIconsSecondaryPropDefault: ButtonIconsSecondaryPropType;
export declare class ButtonIconsSecondary extends React.Component<ButtonIconsSecondaryPropType> {
    constructor(props: any);
    static defaultProps: ButtonIconsSecondaryPropType;
    onClick: (event: any) => void;
    calculateAlertValue: (value: number) => React.ReactText;
    render(): JSX.Element;
}
