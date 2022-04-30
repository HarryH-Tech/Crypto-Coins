import * as actionTypes from "./ActionTypes";

const rootReducer = (state: any, action: any) => {
  switch (action.type) {
    case actionTypes.GET_SPECIFIC_CRYPTO:
      console.log(state);
      return {
        ...state,
        specificCoinData: action.payload,
        companyHoldings: "",
      };

    case actionTypes.GET_COMPANY_HOLDINGS:
      console.log(state);
      return {
        ...state,
        companyHoldings: action.payload,
      };

    case actionTypes.GET_ALL_CRYPTOS:
      console.log(state);
      return {
        ...state,
        allCryptos: action.payload,
      };
  }
  return state;
};

export default rootReducer;
