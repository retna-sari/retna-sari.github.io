import React from 'react';
import { ButtonActionsPropType, ButtonActionsStateType } from "../../../@interfaces/buttons/type.buttons-action";
export declare const ButtonActionsGlobalPropDefault: ButtonActionsPropType;
export declare class ButtonActionsGlobal extends React.Component<ButtonActionsPropType, ButtonActionsStateType> {
    constructor(props: any);
    static defaultProps: ButtonActionsPropType;
    onClick: (event: any) => void;
    render(): JSX.Element;
}
