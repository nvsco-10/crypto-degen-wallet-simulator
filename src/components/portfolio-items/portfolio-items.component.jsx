import { useSelector } from "react-redux";

import { selectPortfolioMarketData } from "../../store/portfolio/portfolio.selector";

import { PortfolioItem } from "../portfolio-item/portfolio-item.component";
import { PortfolioItemsContainer } from "./portfolio-items.styles";


export const PortfolioItems = () => {
  const portfolioMarketData = useSelector(selectPortfolioMarketData);

  return (
    <PortfolioItemsContainer>
      {portfolioMarketData?.map(item => {
        return (
          <PortfolioItem 
            key={item.id}
            name={item.name}
            price={item.current_price}
            change={item.price_change_percentage_24h}
            img={item.img}
            qty={item.qty}
            symbol={item.symbol}
          />
        )
      })}
    </PortfolioItemsContainer>
  )
}