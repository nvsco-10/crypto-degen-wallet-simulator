import { TransactionBalanceContainer } from "./transaction-balance.styles"

export const TransactionBalance = ({ label, amount }) => {
  return (
    <TransactionBalanceContainer>
      {label}:
      <span>
        ${amount ? amount : "-"}
      </span>
    </TransactionBalanceContainer>
  )
}