import React from 'react';
import { Css } from "../../@interfaces/css-style/type.css-style";
export interface ContainerPropType {
    className?: string;
    style?: Css;
    children?: JSX.Element;
}
declare const Container: React.FC<ContainerPropType>;
export { Container };
