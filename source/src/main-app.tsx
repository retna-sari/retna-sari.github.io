import React from "react";
import ReactDOM from "react-dom";

import "@assets/sass/main.scss";
import { MainApps, RouterPropType } from "index-module";
import ScreenPortofolio from "@screens/screen-portofolio";
import { CreateData } from "@data-generator/generateData";
import screenTest from "@screens/screen-test";

const dataRouteMap: RouterPropType = [
  {
    component: ScreenPortofolio,
    exact: true,
    path: "/",
  },
  {
    component: screenTest,
    exact: true,
    path: "/rahasia",
  },

  // {
  //   component: screenAdd,
  //   exact: true,
  //   path: '/add'
  // },
  // {
  //   component: screenAdd,
  //   exact: true,
  //   path: '/edit/:contentId/:indexId'
  // },
  // {
  //   component: screenChart,
  //   exact: true,
  //   path: '/keranjang'
  // },
  // {
  //   component: screenReport,
  //   exact: true,
  //   path: '/laporan'
  // },
  // {
  //   component: screenInfo,
  //   exact: true,
  //   path: '/annisee'

  // },
  {
    component: ScreenPortofolio,
    exact: true,
    path: "/*",
  },
];

declare global {
  interface Window {
    _dataCreator: any;
  }
}
window._dataCreator = CreateData;
class Apps extends React.Component {
  render() {
    return <MainApps renderFrom={"browser"} dataRouteMap={dataRouteMap} />;
  }
}

export default Apps;
