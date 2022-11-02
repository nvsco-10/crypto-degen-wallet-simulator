import { 
  PortfolioItemValueContainer,
  Quantity,
  Value
} from "./portfolio-item-value.styles"

import { formatAmount } from "../../utils/format-amount.utils"

type PortfolioItemValueProps = {
  symbol: string,
  qty: number,
  price: number
}

export const PortfolioItemValue = ({ symbol, qty, price }: PortfolioItemValueProps) => {
  return (
    <PortfolioItemValueContainer>
      <Quantity>
        {formatAmount(qty,'dollar')} 
        <span className="symbol">{symbol}</span>
      </Quantity>
      <Value>
        ${formatAmount(qty*price)}
      </Value>
    </PortfolioItemValueContainer>
  )
}