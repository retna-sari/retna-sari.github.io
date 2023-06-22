import React, { Component } from 'react';
import {Switch, Route, RouteProps } from 'react-router-dom';

export type RouterPropType = Array<RouteProps>;
interface RouterMapPropType{
  renderRoute: RouterPropType,
}
const RouterMapPropDefault: RouterMapPropType = {
  renderRoute: [{
    component:()=> <div>Hello World</div>,
    exact: true
  }]
}

export class RouterMap extends Component<RouterMapPropType> {
  static defaultProps = RouterMapPropDefault;
  render() {
    const { props } = this;
    return (
      <Switch>
        { props.renderRoute?.map((item, index)=>(
          <Route key={`route_list_${index}`} {...item}/>
        ))}
      </Switch>
    );
  }
}
