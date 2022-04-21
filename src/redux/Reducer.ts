import axios from "axios"
import * as actionTypes from "./ActionTypes"




 const rootReducer = (
    state:any,
    action: any
  ) => {
    switch (action.type) {
      case actionTypes.GET_SPECIFIC_CRYPTO:
       
    
        return {
          ...state,
          
          specificCoinData:  action.payload,
        }
    
    }
    return state
  }
  
  export default rootReducer