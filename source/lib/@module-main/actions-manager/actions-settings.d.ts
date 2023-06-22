import { Dispatch } from "../../@interfaces/global-type/global-type";
export declare class Settings {
    setLanguage: (lang: string) => (dispatch: Dispatch) => Promise<void>;
}
