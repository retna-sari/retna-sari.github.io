import { Dispatch } from '@interfaces/global-type/global-type';
import * as types from '../reducers-constant';


export class Settings {
  setLanguage = (lang: string) => async( dispatch: Dispatch ) =>{
    await dispatch({
      type: types.SETTINGS_LANGUAGE,
      lang,
    });
  }
}
