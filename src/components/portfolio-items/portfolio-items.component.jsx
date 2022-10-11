import { PortfolioItem } from "../portfolio-item/portfolio-item.component";
import { PortfolioItemsContainer } from "./portfolio-items.styles";

const ITEMS = [
  {
    id: 1,
    title: 'Bitcoin',
    price: 52000,
    change: 4.12,
    img: "https://bitcoin.org/img/icons/opengraph.png?1664356125",
    qty: 0.0003,
    symbol: 'BTC',
  },
  {
    id: 2,
    title: 'Bitcoin',
    price: 52000,
    change: 4.12,
    img: "https://bitcoin.org/img/icons/opengraph.png?1664356125",
    qty: 0.215,
    symbol: 'BTC',
  },
  {
    id: 3,
    title: 'Bitcoin',
    price: 52000,
    change: 4.12,
    img: "https://bitcoin.org/img/icons/opengraph.png?1664356125",
    qty: 1,
    symbol: 'BTC',
  },
]

export const PortfolioItems = () => {
  return (
    <PortfolioItemsContainer>
      {ITEMS.map(item => {
        return (
          <PortfolioItem 
            key={item.id}
            title={item.title}
            price={item.price}
            change={item.change}
            img={item.img}
            qty={item.qty}
            symbol={item.symbol}
          />
        )
      })}
    </PortfolioItemsContainer>
  )
}