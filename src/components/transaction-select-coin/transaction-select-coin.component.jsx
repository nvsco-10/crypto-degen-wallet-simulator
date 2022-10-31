import { useState } from "react"
import Select from "react-select"

import { TransactionSelectCoinContainer, CoinInfoContainer, CurrentPrice, CoinName } from "./transaction-select-coin.styles"

import { customStyles } from "../../utils/react-select/custom-styles.utils"

export const TransactionSelectCoin = ({ options, coinData, handleSelect }) => {
  const { name, img, symbol } = coinData
  const [isSearchable] = useState(true)

  return (
    <TransactionSelectCoinContainer>
      <label>Select coin:</label>
      <Select
        name="id"
        onChange={handleSelect}
        styles={customStyles}
        options={options} 
        isSearchable={isSearchable}
      />
      <CoinInfoContainer>
        <CoinName>
          {coinData && (
            <>
              <img src={img} alt={name} />
              <span>{symbol}</span>
            </>
          )}
        </CoinName>
        <CurrentPrice>
          Current price:
          <span className="price">
            ${coinData.current_price ? coinData?.current_price : "-"}
          </span>
        </CurrentPrice>
      </CoinInfoContainer>
    </TransactionSelectCoinContainer>
  )

}