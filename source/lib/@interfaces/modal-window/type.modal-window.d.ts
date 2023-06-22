/// <reference types="react" />
import { Css } from '../css-style/type.css-style';
export interface SileEfectPropType {
    [id: string]: Css;
}
export interface RenderHeaderPropType {
    useHeader?: boolean;
    renderHeader?: (dismis: () => void) => JSX.Element;
    dismiss?: () => void;
    headerTitle?: string;
    headerStyle?: Css;
}
export interface LazyFoxModalWindowPropType extends RenderHeaderPropType {
    showOnStart?: boolean;
    position?: string;
    useCloseOnClickBackground?: boolean;
    className?: string;
    style?: Css;
    bodyStyle?: Css;
}
export interface LazyFoxModalWindowStateType {
    isOpen: boolean;
    style_main_window_open: Css;
    style_modal_body: Css;
}
