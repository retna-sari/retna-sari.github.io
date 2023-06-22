import { Css } from '../css-style/type.css-style';
import { DataArray,  CallbackRender} from '@interfaces/global-type/global-type';

export interface FeedsListCommentsPropType {
  render?: ( callback: CallbackRender ) => JSX.Element | any,
  className?: string,
  style?: Css,
  CommentsDataBundle?: ParsingCommentsDataBundlePropType,
  SetParsingCommentsDataBundle?: ( callback: ParsingCommentsDataBundlePropType) => void
}

export interface FeedsListCommentsStateType {
  style?: Css,
}

export interface ParsingCommentsDataBundlePropType {
  data: DataArray<any>,
  type: any
}

export interface ActionsType {
  data: DataArray<any>,
  type: string,
}
