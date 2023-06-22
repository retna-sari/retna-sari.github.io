import { Css } from "../css-style/type.css-style";
export interface FooterPropType {
    activePage?: string;
    useFooter?: boolean;
    isActive?: boolean;
    isText?: boolean;
    className?: string;
    style?: Css;
    children?: any;
}
export declare const FooterPropDefault: FooterPropType;
