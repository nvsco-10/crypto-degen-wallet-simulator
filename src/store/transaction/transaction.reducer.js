import { TRANSACTION_ACTION_TYPES } from "./transaction.types";

const INITIAL_STATE = {
  transactionType: ''
}

export const transactionReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch(type) {
    case TRANSACTION_ACTION_TYPES.SET_TRANSACTION_TYPE:
      return {
        ...state,
        transactionType: payload,
      }

    default: 
      return state;
  }
}