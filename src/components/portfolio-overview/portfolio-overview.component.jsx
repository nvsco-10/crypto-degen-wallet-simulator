import { 
  PortfolioOverviewContainer, 
  ButtonContainer, 
  IconButton 
} from "./portfolio-overview.styles"

import { CgOptions } from "react-icons/cg"
import { TRANSACTION_LINKS } from "../../utils/transaction-links"

export const PortfolioOverview = () => {
  return (
    <PortfolioOverviewContainer>
      <div className="settings-container">
        <span className="icon-btn">
          <CgOptions className="icon" />
        </span>
      </div>
      <div className="total-balance-container">
        <span className="total-balance">$5370</span>
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