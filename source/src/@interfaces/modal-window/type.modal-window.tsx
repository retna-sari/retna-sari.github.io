import { Css } from '../css-style/type.css-style';

export interface SileEfectPropType {
  [id: string]: Css,
}
export interface RenderHeaderPropType {
  useHeader?: boolean,
  renderHeader?: ( dismis: () => void ) => JSX.Element,
  onDismiss?: (obj: any) => void,
  dismiss?: () => void,
  headerTitle?: string,
  headerStyle?: Css,
  isMounted?: boolean
}

export interface LazyFoxModalWindowPropType extends RenderHeaderPropType{
  showOnStart?: boolean,
  position?: string,
  useCloseOnClickBackground?: boolean,
  className?: string,
  onDismiss?: (obj: any) => void,
  style?: Css,
  bodyStyle?: Css,
}

export interface LazyFoxModalWindowStateType{
  isOpen: boolean,
  style_main_window_open: Css,
  style_modal_body: Css,
}
