import { createSelector } from "reselect";

const selectPortfolioReducer = (state) => state.portfolio;

export const selectPortfolioItems = createSelector(
  [selectPortfolioReducer],
  (portfolio) => portfolio.portfolioItems
)

export const selectPortfolioMarketData = createSelector(
  [selectPortfolioReducer],
  (portfolio) => portfolio.portfolioMarketData
)

export const selectPortfolioBalance = createSelector(
  [selectPortfolioMarketData], 
  (portfolioData) => portfolioData.reduce(
    (total, portfolioItem) => total + portfolioItem.qty * portfolioItem.current_price,
    0
  )
)