import { PortfolioOverview } from "../../components/portfolio-overview/portfolio-overview.component";
import { PortfolioItems } from "../../components/portfolio-items/portfolio-items.component";

import { PortfolioContainer } from "./portfolio.styles";

export const Portfolio = () => {
  return (
    <PortfolioContainer>
      <PortfolioOverview />
      <PortfolioItems />
    </PortfolioContainer>
  )
}