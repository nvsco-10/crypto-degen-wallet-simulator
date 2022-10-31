import { PORTFOLIO_ACTION_TYPES } from "./portfolio.types";

const INITIAL_STATE = {
  portfolioItems: [{id: 'tether', qty: 5000}],
  portfolioMarketData: [],
  isLoading: false,
  error: null,
}

export const portfolioReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch(type) {
    case PORTFOLIO_ACTION_TYPES.SET_PORTFOLIO_ITEMS:
      return {
        ...state,
        portfolioItems: payload,
      }
    case PORTFOLIO_ACTION_TYPES.FETCH_PORTFOLIO_MARKET_DATA_START:
      return {
        ...state,
        isLoading: true,
      }
    case PORTFOLIO_ACTION_TYPES.FETCH_PORTFOLIO_MARKET_DATA_SUCCESS:
      return {
        ...state,
        portfolioMarketData: payload,
        isLoading: false,
      }
    case PORTFOLIO_ACTION_TYPES.FETCH_PORTFOLIO_MARKET_DATA_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false,
      }

    case PORTFOLIO_ACTION_TYPES.ADD_ITEM_TO_PORTFOLIO_START:
      return {
        ...state,
        isLoading: true
      }

    case PORTFOLIO_ACTION_TYPES.ADD_ITEM_TO_PORTFOLIO_SUCCESS:
      return {
        ...state,
        portfolioItems: payload,
        isLoading: false,
      }

    case PORTFOLIO_ACTION_TYPES.ADD_ITEM_TO_PORTFOLIO_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false,
      }

    case PORTFOLIO_ACTION_TYPES.REMOVE_ITEM_FROM_PORTFOLIO_START:
      return {
        ...state,
        isLoading: true
      }

    case PORTFOLIO_ACTION_TYPES.REMOVE_ITEM_FROM_PORTFOLIO_SUCCESS:
      return {
        ...state,
        portfolioItems: payload,
        isLoading: false,
      }
      
    case PORTFOLIO_ACTION_TYPES.REMOVE_ITEM_FROM_PORTFOLIO_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false,
      }

    default: 
      return state;
  }
}