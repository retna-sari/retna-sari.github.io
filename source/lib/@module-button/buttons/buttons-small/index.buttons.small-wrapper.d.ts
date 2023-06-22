import React from 'react';
export interface ButtonSmallWrapperPropType {
    onClick: (event: any) => void;
    render?: (callback: object) => JSX.Element;
    isActive: boolean;
    className: string;
}
export interface ButtonSmallWrapperStateType {
    isActive: boolean;
}
export declare const ButtonSmallWrapperPropDefault: ButtonSmallWrapperPropType;
export declare class ButtonSmallWrapper extends React.Component<ButtonSmallWrapperPropType, ButtonSmallWrapperStateType> {
    constructor(props: any);
    static defaultProps: ButtonSmallWrapperPropType;
    render(): JSX.Element;
}
