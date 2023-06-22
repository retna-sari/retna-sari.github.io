import React from 'react';
import { LazyFoxModalWindowPropType, LazyFoxModalWindowStateType } from "../@interfaces/modal-window/type.modal-window";
export declare const LazyFoxModalWindowPropDefault: LazyFoxModalWindowPropType;
export declare class LazyFoxModalWindow extends React.Component<LazyFoxModalWindowPropType, LazyFoxModalWindowStateType> {
    constructor(props: LazyFoxModalWindowPropType);
    private static defaultProps;
    componentDidMount: () => void;
    componentWillUnmount: () => void;
    show: () => void;
    dismiss: () => void;
    useCloseOnClickBackground: () => void;
    setModalToClosed: () => void;
    render(): JSX.Element | null;
}
