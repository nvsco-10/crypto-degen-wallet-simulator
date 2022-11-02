import { TransactionBalanceRow } from "../transaction-balance-row/transaction-balance-row.component"

import { TransactionEndingBalancesContainer } from "./transaction-ending-balances.styles"

type TransactionEndingBalancesProps = {
  totalCost: number,
  endingBalance: number
}

export const TransactionEndingBalances = ({ 
  totalCost, 
  endingBalance 
}: TransactionEndingBalancesProps) => {
  return (
    <TransactionEndingBalancesContainer>
      <TransactionBalanceRow
        label="total"
        amount={totalCost}
        color="rgb(33, 33, 34)"
      />
      <TransactionBalanceRow
        label="ending usdt balance"
        amount={endingBalance}
        color="#141c52"
      />
    </TransactionEndingBalancesContainer>
  )  
}