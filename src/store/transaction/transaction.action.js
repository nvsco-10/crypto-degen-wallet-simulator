import { createAction } from "../../utils/reducer/reducer.utils"
import { TRANSACTION_ACTION_TYPES } from "./transaction.types"

export const setTransactionType = (type) => 
  createAction(TRANSACTION_ACTION_TYPES.SET_TRANSACTION_TYPE, type)

