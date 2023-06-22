import React from 'react';
import { Css } from "../../@interfaces/css-style/type.css-style";
export interface ContentPagePropType {
    className?: string;
    style?: Css;
    children?: JSX.Element;
}
declare const ContentPage: React.FC<ContentPagePropType>;
export { ContentPage };
