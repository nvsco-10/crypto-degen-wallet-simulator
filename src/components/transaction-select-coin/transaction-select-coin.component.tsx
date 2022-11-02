import { useState } from "react"
import Select, { SingleValue, ActionMeta } from "react-select"

import { TransactionSelectCoinContainer, CoinInfoContainer, CurrentPrice, CoinName } from "./transaction-select-coin.styles"

import { customStyles } from "../../utils/react-select/custom-styles.utils"

type Option = {
  value: string,
  label: string
}

type CoinData = {
  id: string,
  name: string,
  img: string,
  current_price: number,
  symbol: string
}

type TransactionSelectCoinProps = {
  options: Option[],
  coinData: CoinData,
  handleSelect: (option: Option | null, actionMeta: ActionMeta<Option>) => void
}

export const TransactionSelectCoin = ({ 
  options, 
  coinData, 
  handleSelect 
}: TransactionSelectCoinProps) => {
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