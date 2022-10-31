import { PortfolioItemInfo } from "../portfolio-item-info/portfolio-item-info.component"
import { PortfolioItemValue } from "../portfolio-item-value/portfolio-item-value.component";

import { 
  PortfolioItemContainer, 
} from "./portfolio-item.styles";

type PortfolioItemProps = {
  name: string,
  price: number,
  change: number,
  img: string,
  qty: number,
  symbol: string,
}

export const PortfolioItem = ({ name, price, change, img, qty, symbol }: PortfolioItemProps) => {
  return (
    <PortfolioItemContainer>
      <PortfolioItemInfo 
        name={name}
        img={img}
        price={price}
        change={change}
      />
      <PortfolioItemValue 
        symbol={symbol}
        qty={qty}
        price={price}
      />
    </PortfolioItemContainer>
  )
}