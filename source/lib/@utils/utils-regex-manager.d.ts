export declare const LIST_OF_REGEX: {
    email: RegExp;
    number: RegExp;
    name: RegExp;
    userName: RegExp;
    spaceName: RegExp;
    spaceNumber: RegExp;
    spaceNull: RegExp;
    password: RegExp;
    null: RegExp;
    money: RegExp;
    youtube: RegExp;
    link: RegExp;
    clears: (e: any) => string;
};
export interface YoutubeCheck {
    result: boolean;
    value: string;
}
export declare class RegexManager {
    name: (value: any, minLength: number) => boolean;
    username: (value: any, minLength: number) => boolean;
    number: (value: any, minLength: number) => boolean;
    email: (value: any, minLength: number) => boolean;
    password: (value: any, minLength: number) => boolean;
    repassword: (value: any, target: any, minLength: number) => boolean;
    null: (value: any, minLength: number) => boolean;
    youtube: (value: any) => YoutubeCheck;
    clears: (e: any) => string;
}
