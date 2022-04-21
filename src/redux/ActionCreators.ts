import axios from "axios"
import * as ActionTypes from "./ActionTypes"
const {GET_SPECIFIC_CRYPTO, ERROR} = ActionTypes

export const fetchSpecificCoinData = (cryptoName: string) => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
  console.log("fetching")
try {
   const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${cryptoName}`)
   console.log(res) 
   dispatch({
        type: GET_SPECIFIC_CRYPTO,
        payload: res.data
    })

}

catch(error){
    dispatch( {
        type: ERROR,
        payload: console.log(error),
    })
}
    
  }