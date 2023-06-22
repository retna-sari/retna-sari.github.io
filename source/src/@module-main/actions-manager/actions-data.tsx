import { ParsingCommentsDataBundlePropType } from '@interfaces/data-type/type.pages-comments';
import { Dispatch } from '@interfaces/global-type/global-type';
import * as types from '../reducers-constant';


export class StoragesSystem {
  setStorage = ({data, type}: ParsingCommentsDataBundlePropType) => async( dispatch: Dispatch ) =>{
    await dispatch({
      type: types.STORAGE_DATAS,
      [type]: data,
    });
  }
}
