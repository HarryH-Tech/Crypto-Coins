import * as actionTypes from "./ActionTypes";

const rootReducer = (state: any, action: any) => {
  switch (action.type) {
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

    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case actionTypes.EXPLORE_BLOCKCHAIN:
      return {
        ...state,
        blockchainInfo: action.payload,
      };
  }
  return state;
};

export default rootReducer;
