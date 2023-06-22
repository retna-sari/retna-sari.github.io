import React from 'react';
import { Css } from '@interfaces/css-style/type.css-style';

export interface ContentPagePropType {
  className?: string,
  style?: Css,
  children?: JSX.Element,
}

const ContentPage: React.FC<ContentPagePropType> = ( props ) =>{
  return (
    <main className = {`content_pages ${props.className}`} style = { props.style }>
      {props.children && props.children}
    </main>
  )
}
export { ContentPage }