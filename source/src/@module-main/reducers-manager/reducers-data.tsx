import * as types from '../reducers-constant';

interface Settings {
  language: string,
  chart: any,
  catalog: any,
  report: any
}

const initialState: Settings = {
  language: 'ind',
  chart: [],
  catalog: [],
  report: []
}

export const StoragesSystem = (state = initialState, action: any): any => {
  switch (action.type) {
    case types.STORAGE_DATAS : {
      return {
        ...state,
        ...action,
      }
    }
    default: return state;
  }
}