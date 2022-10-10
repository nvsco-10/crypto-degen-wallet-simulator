import { WalletHeaderContainer } from "./wallet-header.styles"
import { CgOptions } from "react-icons/cg"
import { BiPlus, BiMinus, BiTransferAlt } from "react-icons/bi"

export const WalletHeader = () => {
  return (
    <WalletHeaderContainer>
      <div className="settings-container">
        <span className="icon-btn">
          <CgOptions className="icon" />
        </span>
      </div>
      <div className="total-balance-container">
        <span className="total-balance">$5370</span>
        <p>My Wallet</p>
      </div>
      <div className="btns-container">
        <div className="btn-container">
          <div className="icon-btn">
            <BiPlus className="icon" />
          </div>
          <p>BUY</p>
        </div>

        <div className="btn-container">
          <div className="icon-btn">
            <BiMinus className="icon" />
          </div>
          <p>SELL</p>
        </div>

        <div className="btn-container">
          <div className="icon-btn">
            <BiTransferAlt className="icon" />
          </div>
          <p>TRANSFER</p>
        </div>

      </div>
    </WalletHeaderContainer>
  )
}