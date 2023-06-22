/// <reference types="react-router" />
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ButtonActionsPropType, ButtonActionsStateType } from "../../../@interfaces/buttons/type.buttons-action";
export declare type ButtonActionsGoBackPropTypeCombined = ButtonActionsPropType & RouteComponentProps;
declare class ButtonActionsGoBackMain extends React.Component<ButtonActionsGoBackPropTypeCombined, ButtonActionsStateType> {
    constructor(props: any);
    static defaultProps: ButtonActionsPropType;
    onClick: (event: any) => void;
    render(): JSX.Element;
}
export declare const ButtonActionsGoBack: React.ComponentClass<Pick<ButtonActionsGoBackPropTypeCombined, "onClick" | "render" | "isActive" | "className" | "totalLike"> & {
    wrappedComponentRef?: ((instance: ButtonActionsGoBackMain | null) => void) | React.RefObject<ButtonActionsGoBackMain> | null | undefined;
}, any> & import("react-router").WithRouterStatics<typeof ButtonActionsGoBackMain>;
export {};
