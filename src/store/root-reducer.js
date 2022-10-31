import { combineReducers } from "redux";

import { portfolioReducer } from "./portfolio/portfolio.reducer";
import { transactionReducer } from "./transaction/transaction.reducer";

export const rootReducer = combineReducers({
  portfolio: portfolioReducer,
  transaction: transactionReducer
})