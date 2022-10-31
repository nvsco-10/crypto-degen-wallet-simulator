import { createAction } from "../../utils/reducer/reducer.utils"
import { PORTFOLIO_ACTION_TYPES } from "./portfolio.types"

import { fetchMarketData, convertCoinValueToTetherQty } from "../../utils/coingecko/coingecko.utils"

const addPortfolioItem = async (portfolioItems, itemToAdd) => {
  const tetherQty = await convertCoinValueToTetherQty(itemToAdd.qty, itemToAdd.price)
  const existingPortfolioItem = portfolioItems.find(item => item.id === itemToAdd.id)

  if(existingPortfolioItem) {
    return portfolioItems.map(item => {
      if(item.id === itemToAdd.id) {
        return {...item, qty: item.qty + itemToAdd.qty}
      }

      if(item.id === 'tether') {
        return {...item, qty: item.qty - tetherQty}
      }

      return item
    })
  }

  let updatedPortfolioItems = [...portfolioItems, {id: itemToAdd.id, qty: itemToAdd.qty }]
  return updatedPortfolioItems.map(item => {
    if(item.id === 'tether') {
      return {...item, qty: item.qty - tetherQty}
    }

    return item
  })
}

const addItemToPortfolioStart = () => 
  createAction(PORTFOLIO_ACTION_TYPES.ADD_ITEM_TO_PORTFOLIO_START)


const addItemToPortfolioSuccess = (portfolioItems) => 
  createAction(
    PORTFOLIO_ACTION_TYPES.ADD_ITEM_TO_PORTFOLIO_SUCCESS,
    portfolioItems
  )


const addItemToPortfolioFailed = (error) => 
  createAction(
    PORTFOLIO_ACTION_TYPES.ADD_ITEM_TO_PORTFOLIO_FAILED,
    error
  )

export const addItemToPortfolioAsync = (portfolioItems, itemToAdd) => async (dispatch) => {
  dispatch(addItemToPortfolioStart())

  try { 
    const updatedPortfolio = await addPortfolioItem(portfolioItems, itemToAdd)
    console.log(updatedPortfolio)
    dispatch(addItemToPortfolioSuccess(updatedPortfolio))
  } catch (error) {
    dispatch(addItemToPortfolioFailed(error))  
  }
}

const removePortfolioItem = async (portfolioItems, itemToRemove) => {
  const tetherQty = await convertCoinValueToTetherQty(itemToRemove.qty, itemToRemove.price)
  const existingPortfolioItem = portfolioItems.find(item => item.id === itemToRemove.id)

  if(existingPortfolioItem) {
    const newQty = existingPortfolioItem.qty - itemToRemove.qty
    let updatedPortfolio = [];

    portfolioItems.forEach((item) => {
      let obj = {}

      if(item.id === 'tether') {
        obj = {...item, qty: item.qty + tetherQty}
        updatedPortfolio.push(obj)
        return
      }

      if(item.id === itemToRemove.id) {
        if(newQty > 0) {
          obj = {...item, qty: item.qty - itemToRemove.qty}
          updatedPortfolio.push(obj)
          return
        }
        return
      }

      updatedPortfolio.push(item)
    })

    return updatedPortfolio
  }

}

const removeItemFromPortfolioStart = () => 
  createAction(PORTFOLIO_ACTION_TYPES.REMOVE_ITEM_FROM_PORTFOLIO_START)


const removeItemFromPortfolioSuccess = (portfolioItems) => 
  createAction(
    PORTFOLIO_ACTION_TYPES.REMOVE_ITEM_FROM_PORTFOLIO_SUCCESS,
    portfolioItems
  )


const removeItemFromPortfolioFailed = (error) => 
  createAction(
    PORTFOLIO_ACTION_TYPES.REMOVE_ITEM_FROM_PORTFOLIO_FAILED,
    error
  )

export const removeItemFromPortfolioAsync = (portfolioItems, itemToRemove) => async (dispatch) => {
  dispatch(removeItemFromPortfolioStart())

  try { 
    const updatedPortfolio = await removePortfolioItem(portfolioItems, itemToRemove)
    console.log(updatedPortfolio)
    dispatch(removeItemFromPortfolioSuccess(updatedPortfolio))
  } catch (error) {
    dispatch(removeItemFromPortfolioFailed(error))  
  }
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

export const resetPortfolio = () => {
  const startingBalance = {
    id: 'tether',
    qty: 5000
  }
  return createAction(PORTFOLIO_ACTION_TYPES.SET_PORTFOLIO_ITEMS, [startingBalance])
}

