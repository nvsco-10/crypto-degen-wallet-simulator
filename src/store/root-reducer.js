import { combineReducers } from "redux";

import { portfolioReducer } from "./portfolio/portfolio.reducer";

export const rootReducer = combineReducers({
  portfolio: portfolioReducer,
})