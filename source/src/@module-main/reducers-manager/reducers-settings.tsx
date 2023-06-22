import * as types from '../reducers-constant';

interface Settings {
  language: string,
}

const initialState: Settings = {
  language: 'ind'
}

export const Settings = (state = initialState, action: any): any => {
  switch (action.type) {
    case types.SETTINGS_LANGUAGE : {
      return {
        ...state,
        language: action.data,
      }
    }
    default: return state;
  }
}