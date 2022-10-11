import { 
  PortfolioItemContainer, 
  MarketInfo,
  MarketValue,
  Stats 
} from "./portfolio-item.styles";

import { formatAmount } from "../../utils/format-amount.utils";

export const PortfolioItem = ({ name, price, change, img, qty, symbol }) => {
  return (
    <PortfolioItemContainer>
      <MarketInfo>
        <div className="img-container">
          <img src={img} alt={name}/>
        </div>
        <Stats>
          <p className="name">{name}</p>
          <div className="price-container">
            <p className="price">${price}</p>
            <p 
              className={`change ${Math.sign(change) === 1 ? "positive" : "negative"}`}
            >
              {`${Math.sign(change) === 1 ? `+${change}` : `-${change}`}`}%
            </p>
          </div>
        </Stats>
      </MarketInfo>
      <MarketValue>
        <p className="quantity">{formatAmount(qty,'qty')} {symbol}</p>
        <p className="value">${formatAmount(qty*price)}</p>
      </MarketValue>
    </PortfolioItemContainer>
  )
}