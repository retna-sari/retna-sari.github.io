/// <reference types="react" />
interface BuutonCallback {
    isActive?: boolean;
    totalLike?: string | number;
}
export interface ButtonActionsPropType {
    onClick?: (event: any) => void;
    render?: (callback: BuutonCallback) => JSX.Element;
    isActive?: boolean;
    className?: string;
    totalLike?: number | string;
}
export interface ButtonActionsStateType {
    isActive?: boolean;
    totalLike?: number;
}
export {};
