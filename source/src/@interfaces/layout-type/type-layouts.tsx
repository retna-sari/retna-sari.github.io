import { Css } from '@interfaces/css-style/type.css-style';

export interface FooterPropType {
  activePage?: string,
  useFooter?: boolean,
  isActive?: boolean,
  isText?: boolean,
  className?: string,
  style?: Css,
  children?: any
}
export const FooterPropDefault: FooterPropType = {
  activePage: 'feeds',
  useFooter: true,
  isText: false,
  className: '',
  style: {},
  children: null
}