import React from 'react';
import { ButtonActionsPropType, ButtonActionsStateType } from "../../../@interfaces/buttons/type.buttons-action";
export declare const ButtonActionsCollectionPropDefault: ButtonActionsPropType;
export declare class ButtonActionsCollection extends React.Component<ButtonActionsPropType, ButtonActionsStateType> {
    constructor(props: any);
    static defaultProps: ButtonActionsPropType;
    onClick: (event: any) => void;
    render(): JSX.Element;
}
