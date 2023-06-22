/// <reference types="redux-persist" />
import { Component } from "react";
import { RouteProps } from 'react-router-dom';
export * from './routers-map';
export * from './actions-map';
export * from './reducers-constant';
export interface MainAppsPropType {
    renderFrom: string;
    dataStore: any;
    dataRouteMap?: Array<RouteProps>;
    whitelist: Array<any>;
}
export declare const PropDefault: MainAppsPropType;
export declare class MainApps extends Component<MainAppsPropType> {
    static defaultProps: MainAppsPropType;
    configureStore: (dataStore: any, whitelist: any[]) => {
        store: import("redux").Store<import("redux-persist").PersistPartial, import("redux").Action<any>> & {
            dispatch: unknown;
        };
        persistedStore: import("redux-persist").Persistor;
    };
    render(): JSX.Element;
}
