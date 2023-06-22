import React from 'react';
import { DataArray, CallbackRender } from "../@interfaces/global-type/global-type";
interface FlatListPropType {
    onScroll?: (callback: object) => void;
    render?: (callback: CallbackRender) => JSX.Element;
    data: DataArray<any>;
}
interface FlatListStateType {
    isActive?: boolean;
}
declare class FlatList extends React.Component<FlatListPropType, FlatListStateType> {
    constructor(props: FlatListPropType);
    static defaultProps: FlatListPropType;
    componentDidMount: () => void;
    componentWillUnmount: () => void;
    onScroll: (e: any) => void;
    render(): any;
}
export default FlatList;
