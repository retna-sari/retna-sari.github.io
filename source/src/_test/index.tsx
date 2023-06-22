import React from 'react';
import ReactDOM from 'react-dom';
import '../@assets/sass/main.scss'
import { MainApps, MainAppsPropType} from "../index-module";
import { RouterPropType } from '../@module-main/routers-map';
import HelloWorld from './component-test';

const dataRouteMap: RouterPropType = [
  {
    component: HelloWorld,
    exact: true
  }
];

class Apps extends React.Component{
  render(){
    return(
      <MainApps renderFrom={"browser"} dataRouteMap={dataRouteMap} />
    )
  }
}

export default Apps;
