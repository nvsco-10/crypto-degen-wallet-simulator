import { createAction } from "../../utils/reducer/reducer.utils"
import { PORTFOLIO_ACTION_TYPES } from "./portfolio.types"

import { fetchMarketData } from "../../utils/coingecko/coingecko.utils"

const addPortfolioItem = (portfolioItems, itemToAdd) => {
  const existingPortfolioItem = portfolioItems.find(item => item.id === itemToAdd.id)

  if(existingPortfolioItem) {
    return portfolioItems.map(item =>
      item.id === itemToAdd 
        ? {...item, qty: item.qty + itemToAdd.qty}
        : item
    )
  }

  return [...portfolioItems, {...itemToAdd }]
}

export const addItemToPortfolio = (portfolioItems, itemToAdd) => {
  const newPortfolioItems = addPortfolioItem(portfolioItems, itemToAdd)
  return createAction(PORTFOLIO_ACTION_TYPES.SET_PORTFOLIO_ITEMS, newPortfolioItems)
}

const fetchPortfolioDataStart = () => 
  createAction(PORTFOLIO_ACTION_TYPES.FETCH_PORTFOLIO_MARKET_DATA_START)


const fetchPortfolioDataSuccess = (portfolioData) => 
  createAction(
    PORTFOLIO_ACTION_TYPES.FETCH_PORTFOLIO_MARKET_DATA_SUCCESS,
    portfolioData
  )


const fetchPortfolioDataFailed = (error) => 
  createAction(
    PORTFOLIO_ACTION_TYPES.FETCH_PORTFOLIO_MARKET_DATA_SUCCESS,
    error
  )


export const fetchPorfolioMarketDataAsync = (portfolioItems) => async (dispatch) => {
  dispatch(fetchPortfolioDataStart());

  try { 
    if (portfolioItems.length > 0) {
      const marketData = await fetchMarketData(portfolioItems)

      const portfolioMarketData = marketData.map((coinsData) => {
        const existingCoin = portfolioItems.find(item => item.id === coinsData.id)

        return {...coinsData, qty: existingCoin.qty}
      })

      dispatch(fetchPortfolioDataSuccess(portfolioMarketData))
    }
  } catch (error) {
    dispatch(fetchPortfolioDataFailed(error))
  }
}