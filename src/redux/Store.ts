import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./Reducer";

const initialState = {
  sidebarMenuShowing: true,
  specificCoinData: "",
  allCryptos: "",
  blockchainInfo: "",
  loading: false,
  error: "",
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
