import axios from "axios";
import * as ActionTypes from "./ActionTypes";
const {
  GET_SPECIFIC_CRYPTO,

  GET_ALL_CRYPTOS,
  SET_LOADING,
  SET_ERROR,
  EXPLORE_BLOCKCHAIN,
} = ActionTypes;

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
        type: GET_SPECIFIC_CRYPTO,
        payload: { coinDataRes, companyHoldingsRes },
      });
      dispatch({
        type: SET_LOADING,
        payload: false,
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

export const exploreBlockchain =
  () => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({
      type: SET_LOADING,
      payload: true,
    });
    console.log("hi");
    try {
      const query = `query{bitcoin{blocks{count}}}`;
      const url: string =
        "https://" + process.env.REACT_APP_BLOCKCHAIN_EXPLORER_API_URL!;
      const opts = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": "BQYYJCYwrOg7YXugj0wUip86707MTx5U", //process.env.REACT_APP_BLOCKCHAIN_EXPLORER_API_KEY,
        },
        body: JSON.stringify({
          query,
        }),
      };

      console.log(process.env.REACT_APP_BLOCKCHAIN_EXPLORER_API_KEY);
      const res = await axios.post("https://graphql.bitquery.io/", opts);
      console.log(res);
      dispatch({
        type: EXPLORE_BLOCKCHAIN,
        payload: "res.data",
      });
      dispatch({
        type: SET_LOADING,
        payload: false,
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
