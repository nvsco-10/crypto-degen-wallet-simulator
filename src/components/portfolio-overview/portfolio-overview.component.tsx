import { useState, ComponentType } from "react"
import { useDispatch, useSelector } from "react-redux"

import { selectPortfolioBalance } from "../../store/portfolio/portfolio.selector"
import { resetPortfolio } from "../../store/portfolio/portfolio.action"

import { PortfolioOverviewBalance } from "../portfolio-overview-balance/portfolio-overview-balance.component"
import { PortfolioOverviewButton } from "../portfolio-overview-button/portfolio-overview-button.component"
import { PortfolioOverviewResetModal } from "../portfolio-overview-reset-modal/portfolio-overview-reset-modal.component"

import { 
  PortfolioOverviewContainer, 
  SettingsContainer,
  ButtonsContainer
} from "./portfolio-overview.styles"

import { VscDebugRestart } from "react-icons/vsc"
import { TRANSACTION_LINKS } from "../../utils/transaction-links"

type LinkProps = {
  id: number,
  label: string,
  //note: temporary prop type - react-icon won't accept Component type but accepts it it Overview Button component?
  icon: any
}

export const PortfolioOverview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useDispatch()
  const portfolioBalance = useSelector(selectPortfolioBalance)

  const handleModal = () => {
    setIsModalOpen(prev => !prev)
  }

  const handleReset = () => {
    dispatch(resetPortfolio())
    handleModal()
  }

  return (
    <PortfolioOverviewContainer>
      <SettingsContainer>
        <span className="icon-btn" onClick={handleModal}>
          <VscDebugRestart className="icon" />
        </span>
      </SettingsContainer>
      <PortfolioOverviewResetModal 
        isModalOpen={isModalOpen}
        handleModal={handleModal}
        handleReset={handleReset}
      />
      <PortfolioOverviewBalance 
        portfolioBalance={portfolioBalance}
      />
      <ButtonsContainer>
      {TRANSACTION_LINKS?.map((link: LinkProps) => {
        return (
          <PortfolioOverviewButton
            key={link.id}
            label={link.label}
            icon={link.icon}
          />
        )
      })}
      </ButtonsContainer>
    </PortfolioOverviewContainer>
  )
}