import axios from "axios";
import * as ActionTypes from "./ActionTypes";
const {
  GET_SPECIFIC_CRYPTO,
  GET_COMPANY_HOLDINGS,
  GET_ALL_CRYPTOS,
  SET_LOADING,
  SET_ERROR,
} = ActionTypes;

export const setLoading =
  (loadingStatus: boolean) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    console.log(loadingStatus);
    try {
      dispatch({
        type: SET_LOADING,
        payload: loadingStatus,
      });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: console.log(error),
      });
    }
  };

export const fetchSpecificCoinData =
  (cryptoName: string) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({
      type: SET_LOADING,
      payload: true,
    });
    try {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${cryptoName}`
      );

      // If res.data is called directly in payload object in dispatch it causes an error
      // so call here, set to data variable then put in payload
      const data = res.data;
      dispatch({
        type: GET_SPECIFIC_CRYPTO,
        payload: { data, cryptoName },
      });
      dispatch({
        type: SET_LOADING,
        payload: false,
      });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: console.log(error),
      });
      dispatch({
        type: SET_LOADING,
        payload: false,
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
        type: SET_ERROR,
        payload: console.log(error),
      });
    }
  };

export const getAllCryptos =
  () => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({
      type: SET_LOADING,
      payload: true,
    });
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=50&page=1&sparkline=false"
      );

      dispatch({
        type: GET_ALL_CRYPTOS,
        payload: res.data,
      });
      dispatch({
        type: SET_LOADING,
        payload: false,
      });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: console.log(error),
      });
      dispatch({
        type: SET_LOADING,
        payload: false,
      });
    }
  };
