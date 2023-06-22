import { Component } from 'react';
import { RouteProps } from 'react-router-dom';
export declare type RouterPropType = Array<RouteProps>;
interface RouterMapPropType {
    renderRoute: RouterPropType;
}
export declare class RouterMap extends Component<RouterMapPropType> {
    static defaultProps: RouterMapPropType;
    render(): JSX.Element;
}
export {};
