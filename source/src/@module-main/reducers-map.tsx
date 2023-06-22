import { combineReducers } from 'redux';
import { Settings } from './reducers-manager/reducers-settings';
import { StoragesSystem } from './reducers-manager/reducers-data'

export const StoreReducersPackage = ( reducersData: any): any => combineReducers({
  Settings,
  StoragesSystem,
  ...reducersData,
})
