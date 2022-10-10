import { WalletBodyContainer } from "./wallet-body.styles";

export const WalletBody = () => {
  return (
    <WalletBodyContainer>
      <div className="portfolio-item">
        <div className="section">
          <div className="img-container">
            <img src="https://bitcoin.org/img/icons/opengraph.png?1664356125" alt=""/>
          </div>
          <div className="stats-container">
            <p className="title">Bitcoin</p>
            <div className="price-container">
              <p className="price">$52000</p>
              <p className="change">+4.17%</p>
            </div>
          </div>
        </div>
        <div className="section">
          <p className="quantity">0 BTC</p>
        </div>
      </div>
      
    </WalletBodyContainer>
  )
}