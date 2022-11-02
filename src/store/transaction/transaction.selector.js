import { createSelector } from "reselect";

const selectTransactionReducer = (state) => state.transaction;

export const selectTransactionType = createSelector(
  [selectTransactionReducer],
  (transaction) => transaction.transactionType
)

export const selectAlertText = createSelector(
  [selectTransactionReducer],
  (transaction) => transaction.alertText
)

export const selectShowAlert = createSelector(
  [selectTransactionReducer],
  (transaction) => transaction.showAlert
)
