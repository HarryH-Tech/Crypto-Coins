import axios from "axios";
import * as ActionTypes from "./ActionTypes";
const {
  TOGGLE_SIDEBAR_MENU,
  GET_SPECIFIC_CRYPTO,
  GET_ALL_CRYPTOS,
  SET_LOADING,
  SET_ERROR,
} = ActionTypes;

export const toggleSidebarMenu =
  (sidebarMenuStatus: boolean) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    try {
      dispatch({
        type: TOGGLE_SIDEBAR_MENU,
        payload: !sidebarMenuStatus,
      });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: console.log(error),
      });
    }
  };

export const setLoading =
  (loadingStatus: boolean) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
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
      const coinDataRes = await axios
        .get(`https://api.coingecko.com/api/v3/coins/${cryptoName}`)
        .catch((err) => {
          dispatch({
            type: SET_ERROR,
            payload: "Sorry there was an error, please try again later.",
          });
        });
      const companyHoldingsRes = await axios
        .get(
          `https://api.coingecko.com/api/v3/companies/public_treasury/${cryptoName}`
        )
        .catch(() => {
          dispatch({
            type: SET_ERROR,
            payload:
              "No Company Holdings Data Available For This Cryptocurrency.",
          });
        });

      dispatch({
        type: SET_LOADING,
        payload: false,
      });
      dispatch({
        type: GET_SPECIFIC_CRYPTO,
        payload: { coinDataRes, companyHoldingsRes },
      });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error,
      });
      dispatch({
        type: SET_LOADING,
        payload: false,
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
