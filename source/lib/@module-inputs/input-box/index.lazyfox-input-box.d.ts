import React from 'react';
import { CallbackRender } from "../../@interfaces/global-type/global-type";
export interface LazyFoxInputBoxPropsType {
    onChange: (callback: any) => void;
    onBlur?: (callback: any) => void;
    onFocus?: (callback: any) => void;
    onSubmit?: (callback: any) => void;
    className?: string;
    render?: (callback: CallbackRender) => JSX.Element;
    isError: boolean;
    placeholder: string;
    style?: object;
    title: string;
    errorText?: string;
    isMultiline?: boolean;
    rows?: number;
    maxLength?: number | undefined;
    minLength?: number;
    type: string;
    value: any;
}
export interface LazyFoxInputBoxStateType {
    isError: boolean;
    value?: any;
    type?: string;
    isShowPassword?: boolean;
}
export declare const LazyFoxInputBoxPropsDefault: LazyFoxInputBoxPropsType;
export declare class LazyFoxInputBox extends React.Component<LazyFoxInputBoxPropsType, LazyFoxInputBoxStateType> {
    constructor(props: any);
    private RegTest;
    static defaultProps: LazyFoxInputBoxPropsType;
    componentDidUpdate: (prevProps: any) => void;
    onChange: (event: any) => void;
    onClickEyeBtn: (event: any) => void;
    render(): JSX.Element;
}
