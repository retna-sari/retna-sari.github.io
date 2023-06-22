import { Component } from "react";
import { FooterPropType } from "../../@interfaces/layout-type/type-layouts";
declare class Header extends Component<FooterPropType> {
    static defaultProps: FooterPropType;
    render(): JSX.Element;
}
export default Header;
