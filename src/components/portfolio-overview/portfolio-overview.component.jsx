import { useSelector } from "react-redux"

import { selectPortfolioBalance } from "../../store/portfolio/portfolio.selector"

import { 
  PortfolioOverviewContainer, 
  ButtonContainer, 
  IconButton 
} from "./portfolio-overview.styles"

import { CgOptions } from "react-icons/cg"
import { formatAmount } from "../../utils/format-amount.utils"
import { TRANSACTION_LINKS } from "../../utils/transaction-links"

export const PortfolioOverview = () => {
  const portfolioBalance = useSelector(selectPortfolioBalance)
  return (
    <PortfolioOverviewContainer>
      <div className="settings-container">
        <span className="icon-btn">
          <CgOptions className="icon" />
        </span>
      </div>
      <div className="total-balance-container">
        <span className="total-balance">${formatAmount(portfolioBalance)}</span>
        <p>My Portfolio</p>
      </div>
      <div className="btns-container">
      {TRANSACTION_LINKS.map(link => {
        return (
          <ButtonContainer key={link.id}>
            <IconButton to={link.path}>
              {link.icon}
            </IconButton>
            <p>{link.label}</p>
          </ButtonContainer>
        )
      })}

      </div>
    </PortfolioOverviewContainer>
  )
}