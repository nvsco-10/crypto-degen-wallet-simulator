import { TransactionBalanceRowContainer } from "./transaction-balance-row.styles"

type TransactionBalanceRowProps = {
  label: string,
  amount: number,
  color?: string
}

export const TransactionBalanceRow = ({ label, amount, color }: TransactionBalanceRowProps) => {
  return (
    <TransactionBalanceRowContainer>
      <div style={{backgroundColor: color || 'blue'}}>
        {label}:
      </div>
      <span>
        ${amount ? amount : "-"}
      </span>
    </TransactionBalanceRowContainer>
  )
}