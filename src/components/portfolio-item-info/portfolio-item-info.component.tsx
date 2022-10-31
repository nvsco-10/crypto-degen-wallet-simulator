import { 
  PortfolioItemInfoContainer, 
  Info 
} from "./portfolio-item-info.styles"

type PortfolioItemInfoProps = {
  name: string,
  img: string,
  price: number,
  change: number
}

export const PortfolioItemInfo = ({ name, img, price, change }: PortfolioItemInfoProps) => {
  return (
    <PortfolioItemInfoContainer>
      <div className="img-container">
        <img src={img} alt={name}/>
      </div>
      <Info>
        <p className="name">{name}</p>
        <div className="price-container">
          <p className="price">${price}</p>
          <p className={`change ${Math.sign(change) === 1 
              ? "positive" 
              : "negative"}`
            }
          >
            {`${Math.sign(change) === 1 ? `+${change}` : `-${change}`}`}%
          </p>
        </div>
      </Info>
    </PortfolioItemInfoContainer>
  )
}