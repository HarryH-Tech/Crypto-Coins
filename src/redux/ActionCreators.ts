import axios from "axios";
import * as ActionTypes from "./ActionTypes";
const { GET_SPECIFIC_CRYPTO, GET_COMPANY_HOLDINGS, GET_ALL_CRYPTOS, ERROR } =
  ActionTypes;

export const fetchSpecificCoinData =
  (cryptoName: string) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    try {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${cryptoName}`
      );

      // If call res.data directly in payload object in dispatch it causes an error
      // so call here and set to data variable then put in payload
      const data = res.data;
      dispatch({
        type: GET_SPECIFIC_CRYPTO,
        payload: { data, cryptoName },
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: console.log(error),
      });
    }
  };

export const getCompanyHoldings =
  (cryptoName: string) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    try {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/companies/public_treasury/${cryptoName}`
      );
      console.log(res);
      dispatch({
        type: GET_COMPANY_HOLDINGS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: console.log(error),
      });
    }
  };

export const getAllCryptos =
  () => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=50&page=1&sparkline=false"
      );

      console.log(res);

      dispatch({
        type: GET_ALL_CRYPTOS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: console.log(error),
      });
    }
  };
