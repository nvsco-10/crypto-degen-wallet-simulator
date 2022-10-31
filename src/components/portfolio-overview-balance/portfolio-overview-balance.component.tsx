import { PortfolioOverviewBalanceContainer } from "./portfolio-overview-balance.styles"

import { formatAmount } from "../../utils/format-amount.utils"

type PortfolioOverviewBalanceProps = {
  portfolioBalance: number
}

export const PortfolioOverviewBalance = ({ portfolioBalance }: PortfolioOverviewBalanceProps) => {
  return (
    <PortfolioOverviewBalanceContainer>
      <span className="balance">
        ${formatAmount(portfolioBalance)}
      </span>
      <p>My Portfolio</p>
    </PortfolioOverviewBalanceContainer>
  )
}