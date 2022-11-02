import { TRANSACTION_ACTION_TYPES } from "./transaction.types";

const INITIAL_STATE = {
  transactionType: '',
  showAlert: false,
  alertText: ''
}

export const transactionReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch(type) {
    case TRANSACTION_ACTION_TYPES.SET_TRANSACTION_TYPE:
      return {
        ...state,
        transactionType: payload,
      }

    case TRANSACTION_ACTION_TYPES.DISPLAY_ALERT:
      return {
        ...state,
        showAlert: true,
        alertText: payload || 'Please provide all values!'
      }

    case TRANSACTION_ACTION_TYPES.CLEAR_ALERT:
      return {
        ...state,
        showAlert: false,
        alertText: ''
      }

    default: 
      return state;
  }
}