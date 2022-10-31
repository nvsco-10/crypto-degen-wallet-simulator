import { InputQuantityContainer } from "./transaction-input-quantity.styles";

export const TransactionInputQuantity = ({ formData, handleInputChange, handleMax }) => {
  return (
    <InputQuantityContainer>
      <label>Quantity:</label>
      <div className="quantity-container">
        <input 
          name="qty"
          value={formData.qty}
          onChange={handleInputChange}
        />
        <button onClick={handleMax}>
          max
        </button>
      </div>
      {/* <div className="alert">
      {
        showAlert && 'Please enter a valid quantity!'
      }
      </div> */}
    </InputQuantityContainer>
  )
}