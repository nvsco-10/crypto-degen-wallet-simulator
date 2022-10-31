import { createSelector } from "reselect";

const selectTransactionReducer = (state) => state.transaction;

export const selectTransactionType = createSelector(
  [selectTransactionReducer],
  (transaction) => transaction.transactionType
)
