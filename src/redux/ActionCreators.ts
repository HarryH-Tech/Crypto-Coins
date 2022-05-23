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
    dispatch({
      type: TOGGLE_SIDEBAR_MENU,
      payload: !sidebarMenuStatus,
    });
  };

export const fetchSpecificCoinData =
  (cryptoName: string) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({
      type: SET_LOADING,
      payload: true,
    });
    dispatch({
      type: SET_ERROR,
      payload: "",
    });

    try {
      const coinDataRes = await axios
        .get(`https://api.coingecko.com/api/v3/coins/${cryptoName}`)
        .catch(() => {
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
            payload: "Company holding information not available.",
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
        payload:
          "Sorry, there was a problem retrieving the data, please try again.",
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
      // .catch(() => {
      //   dispatch({
      //     type: SET_ERROR,
      //     payload:
      //       "Sorry, there was a problem retrieving the data, please try again.",
      //   });
      // });

      dispatch({
        type: SET_LOADING,
        payload: false,
      });
      dispatch({
        type: GET_ALL_CRYPTOS,
        payload: res.data,
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
