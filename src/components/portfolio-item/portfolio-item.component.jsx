import { 
  PortfolioItemContainer, 
  MarketInfo,
  MarketValue,
  Stats 
} from "./portfolio-item.styles";

export const PortfolioItem = ({ title, price, change, img, qty, symbol }) => {
  return (
    <PortfolioItemContainer>
      <MarketInfo>
        <div className="img-container">
          <img src={img} alt={title}/>
        </div>
        <Stats>
          <p className="title">{title}</p>
          <div className="price-container">
            <p className="price">${price}</p>
            <p className="change">{`${Math.sign(change) === 1 ? `+${change}` : `-${change}`}`}%</p>
          </div>
        </Stats>
      </MarketInfo>
      <MarketValue>
        <p className="quantity">{qty} {symbol}</p>
        <p className="value">${qty*price}</p>
      </MarketValue>
    </PortfolioItemContainer>
  )
}