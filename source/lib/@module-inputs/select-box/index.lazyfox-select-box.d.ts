import React from 'react';
import { DataArray } from "../../@interfaces/global-type/global-type";
import { CallbackRender } from "../../@interfaces/global-type/global-type";
export interface LazyFoxSelectBoxPropsType {
    onSelect: (callback: object) => void;
    className: string;
    data: DataArray<any>;
    render?: (callback: CallbackRender) => JSX.Element;
    isError: boolean;
    placeholder: string;
    selectedData: Array<any>;
    style: object;
    limit: number;
    useMultipleSelect: boolean;
    targetKeys: string;
    title: string;
    useModal: boolean;
    errorText: string;
}
export interface LazyFoxSelectBoxStateType {
    isOpen: boolean;
    selectedData: Array<any>;
    data: DataArray<any>;
}
export declare const LazyFoxSelectBoxPropsDefault: LazyFoxSelectBoxPropsType;
export declare class LazyFoxSelectBox extends React.Component<LazyFoxSelectBoxPropsType, LazyFoxSelectBoxStateType> {
    constructor(props: any);
    static defaultProps: LazyFoxSelectBoxPropsType;
    private mainModalWindow;
    onClick: (event: any) => void;
    onSelectItems: (items: any, index: number) => void;
    componentDidUpdate: (prevProps: any, prevState: any) => void;
    render(): JSX.Element;
}
