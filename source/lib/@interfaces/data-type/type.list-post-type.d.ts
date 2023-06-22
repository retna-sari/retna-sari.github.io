/// <reference types="react" />
import { Css } from '../css-style/type.css-style';
import { DataArray, CallbackRender } from "../global-type/global-type";
export interface CategoryPostPropType {
    render?: (callback: CallbackRender) => JSX.Element;
    className?: string;
    style?: Css;
    PostTypeDataBundle?: PostTypeDataBundlePropType;
    SetParsingPostTypeDataBundle?: (callback: PostTypeDataBundlePropType) => void;
}
export interface CategoryPostStateType {
    style?: Css;
}
export interface PostTypeDataBundlePropType {
    data: DataArray<any>;
}
export interface ActionsType {
    data: DataArray<any>;
    type: string;
}
