import { ChangeEvent } from "react"
import { InputQuantityContainer } from "./transaction-input-quantity.styles";

type TransactionInputQuantityProps = {
  qty: number,
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void,
  handleMax: () => void
}

export const TransactionInputQuantity = ({ 
  qty, 
  handleInputChange, 
  handleMax 
}: TransactionInputQuantityProps) => {
  return (
    <InputQuantityContainer>
      <label>Quantity:</label>
      <div className="quantity-container">
        <input 
          name="qty"
          value={qty}
          onChange={handleInputChange}
        />
        <button onClick={handleMax}>
          max
        </button>
      </div>
    </InputQuantityContainer>
  )
}