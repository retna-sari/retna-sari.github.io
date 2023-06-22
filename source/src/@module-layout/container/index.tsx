import React from 'react';
import { Css } from '@interfaces/css-style/type.css-style';

export interface ContainerPropType {
  className?: string,
  style?: Css,
  children?: JSX.Element,
}

const Container: React.FC<ContainerPropType> = ( props ) =>{
  return (
    <div className={`container ${props.className}`} style={ props.style }>
      { props.children && props.children }
    </div>
  )
}

Container.defaultProps = {
  className: '',
  style: {},
}
export { Container };