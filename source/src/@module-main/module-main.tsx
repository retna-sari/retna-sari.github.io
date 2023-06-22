import React, { Component } from "react";
import { BrowserRouter, StaticRouter, RouteProps } from 'react-router-dom';

import { RouterMap } from './routers-map';
import { StoreReducersPackage } from './reducers-map';

import storage from 'redux-persist/lib/storage'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react';
export * from './routers-map';
export * from './actions-map';
export * from './reducers-constant';

export interface MainAppsPropType{
  renderFrom: string,
  dataStore: any,
  dataRouteMap?: Array<RouteProps>,
  whitelist: Array<any>
}
export const PropDefault: MainAppsPropType = {
  renderFrom: 'browser',
  dataStore: {},
  // dataRouteMap: [],
  whitelist: ['StoragesSystem']
}

export class MainApps extends Component<MainAppsPropType> {
  static defaultProps = PropDefault;

  configureStore = ( dataStore: any, whitelist: Array<any>) => {
    const initialState: any = {}
    const persistConfig = {
        key: 'root',
        storage,
        whitelist: whitelist,
    }
    const persistedReducer = persistReducer(persistConfig, StoreReducersPackage( dataStore ) );
    const store = createStore(persistedReducer, initialState, applyMiddleware(ThunkMiddleware));
          //store.dispatch(actionCreators.GetLocalization());
    const persistedStore = persistStore(store);
    return {
        store,
        persistedStore,
    }
  }

  render() {
    const { props } = this;
    const { store, persistedStore } = this.configureStore( props.dataStore, props.whitelist );
    if(props.renderFrom === 'browser'){
      return(
        <Provider store = { store } >
          <PersistGate loading = { null } persistor = { persistedStore }>
            <BrowserRouter>
              <RouterMap renderRoute = { props.dataRouteMap } />
            </BrowserRouter>
          </PersistGate>
        </Provider>
      )
    }else{
      return (
        <Provider store = { store }>
          <PersistGate loading = { null } persistor = { persistedStore }>
            <StaticRouter>
              <RouterMap />
            </StaticRouter>
          </PersistGate>
        </Provider>
      );
    }
  }
}