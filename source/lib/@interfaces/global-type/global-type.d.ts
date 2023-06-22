export declare type Dispatch = (callback: any) => void;
export interface DataArray<T> {
    [id: string]: T;
}
export interface CallbackRender {
    items: any;
    index: number;
    isSelected?: boolean;
}
