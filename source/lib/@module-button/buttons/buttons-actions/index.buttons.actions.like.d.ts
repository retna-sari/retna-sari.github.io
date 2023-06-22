import React from 'react';
import { ButtonActionsPropType, ButtonActionsStateType } from "../../../@interfaces/buttons/type.buttons-action";
export declare const ButtonActionsLikePropDefault: ButtonActionsPropType;
export declare class ButtonActionsLike extends React.Component<ButtonActionsPropType, ButtonActionsStateType> {
    constructor(props: any);
    static defaultProps: ButtonActionsPropType;
    calculateTotalLike: (isActive: boolean) => number | undefined;
    onClick: (event: any) => void;
    render(): JSX.Element;
}
