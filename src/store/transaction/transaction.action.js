import { useDispatch } from "react-redux"

import { createAction } from "../../utils/reducer/reducer.utils"
import { TRANSACTION_ACTION_TYPES } from "./transaction.types"


export const setTransactionType = (type) => 
  createAction(TRANSACTION_ACTION_TYPES.SET_TRANSACTION_TYPE, type)

const clearAlert = () => 
  createAction(TRANSACTION_ACTION_TYPES.CLEAR_ALERT)


const displayAlert = (alertText) => 
  createAction(TRANSACTION_ACTION_TYPES.DISPLAY_ALERT, alertText)


export const setDisplayAlert = (alertText) => (dispatch) => {
  dispatch(displayAlert(alertText))

  setTimeout(() => {
    dispatch(clearAlert())
  }, 2000)
}
