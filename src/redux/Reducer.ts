import * as actionTypes from "./ActionTypes";

const rootReducer = (state: any, action: any) => {
  switch (action.type) {
    case actionTypes.TOGGLE_SIDEBAR_MENU:
      return {
        ...state,
        sidebarMenuShowing: action.payload,
      };
    case actionTypes.GET_SPECIFIC_CRYPTO:
      return {
        ...state,
        specificCoinData: action.payload,
      };

    case actionTypes.GET_ALL_CRYPTOS:
      return {
        ...state,
        allCryptos: action.payload,
      };

    case actionTypes.EXPLORE_BLOCKCHAIN:
      return {
        ...state,
        blockchainInfo: action.payload,
      };

    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
  }
  return state;
};

export default rootReducer;
