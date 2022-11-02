import { useState, useEffect, ChangeEvent } from "react"
import { ActionMeta } from "react-select"
// import { useDispatch, useSelector } from "react-redux"

// redux store
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { addItemToPortfolioAsync, removeItemFromPortfolioAsync } from "../../store/portfolio/portfolio.action"
import { selectTetherData, selectPortfolioItems } from "../../store/portfolio/portfolio.selector"
import { setDisplayAlert } from "../../store/transaction/transaction.action"
import { selectTransactionType, selectShowAlert } from "../../store/transaction/transaction.selector"

// components
import { TransactionSelectCoin } from "../transaction-select-coin/transaction-select-coin.component"
import { TransactionInputQuantity } from "../transaction-input-quantity/transaction-input-quantity.component"
import { TransactionBalanceRow } from "../transaction-balance-row/transaction-balance-row.component"
import { TransactionEndingBalances } from "../transaction-ending-balances/transaction-ending-balances.component"
import { Alert } from "../alert/alert.component"

import { TransactionFormContainer } from "./transaction-form.styles"

import { COINS_LIST } from "../../utils/coingecko/coinslist.utils"
import { formatAmount } from "../../utils/format-amount.utils"
import { calculateTotalCost } from "../../utils/transactions/transactions.utils"
import { fetchCoinData } from '../../utils/coingecko/coingecko.utils'


const DEFAULT_FORM_DATA = {
  id: '',
  qty: 0,
  price: 0,
}

const DEFAULT_COIN_DATA = {
  id: '',
  name: '',
  current_price: 0,
  img: '',
  symbol: ''
}

// select option type
type Option = {
  value: string | undefined,
  label: string
}

export const TransactionForm = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA)
  const [coinData, setCoinData] = useState(DEFAULT_COIN_DATA)
  const [totalCost, setTotalCost] = useState(0)
  const [endingBalance, setEndingBalance] = useState(0)
  const [isDisabled, setIsDisabled] = useState(true)
  
  const portfolioItems = useAppSelector(selectPortfolioItems)
  const tetherData = useAppSelector(selectTetherData)
  const transactionType = useAppSelector(selectTransactionType)
  const showAlert = useAppSelector(selectShowAlert)

// get coin data
  useEffect(() => {
    const getData = async (id:string) => {
      const data = await fetchCoinData(id)
      setCoinData(data)
      setFormData({...formData, 'price': data.current_price})
    }
    formData.id && getData(formData.id)
  }, [formData.id])

  // calculate total cost if current price exists and qty is a valid number
  useEffect(() => {
    if (coinData.current_price && !isNaN(formData.qty) && formData.qty > 0) {
      setTotalCost(calculateTotalCost(coinData.current_price, formData.qty))
    }
  }, [coinData.current_price, formData.qty])

  // calculate ending balance
  useEffect(() => {
    let balance = 0;

    if(transactionType === 'buy') {
      balance = (tetherData.current_price * tetherData.qty) - totalCost;
    }

    if(transactionType === 'sell') {
      balance = (tetherData.current_price * tetherData.qty) + totalCost;
    }

    if (balance < 0) {
      setIsDisabled(true)
    } else {
      setIsDisabled(false)
    }
    setEndingBalance(balance)
  }, [totalCost])

  const handleSelect = (option: Option | null, actionMeta: ActionMeta<Option>
  ) => {
    setFormData({...formData, [actionMeta.name || 'id']: option?.value || ''})
  }
    
  const handleInputQty = (e: ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;
    setFormData({...formData, [e.target.name]: input})
  }

  const handleMaxQty = () => {
    if (coinData.current_price) {
      let maxQty;

      if(transactionType === 'buy') {
        maxQty = (tetherData.current_price * tetherData.qty) / coinData.current_price
        setFormData({...formData, 'qty': maxQty})
        return
      }

      if(transactionType === 'sell') {
        const existingPortfolioItem = portfolioItems.find(
          (item: { id: string, qty: number }) => coinData.id === item.id
        )

        existingPortfolioItem ? maxQty = existingPortfolioItem.qty : maxQty = 0
        setFormData({...formData, 'qty': maxQty})
        return
      }
    }
    return
  }

  const handleSubmit = () => {
    if (!formData.id || !formData.price || isNaN(formData.qty) || formData.qty <= 0) {
      dispatch(setDisplayAlert())
      return
    }
    if (transactionType === 'buy') {
      const parsedQty = typeof formData.qty === 'string' ? parseInt(formData.qty) : formData.qty
      dispatch(addItemToPortfolioAsync(portfolioItems, {...formData, qty: parsedQty}))
    }

    if (transactionType === 'sell') {
      const existingPortfolioItem = portfolioItems.find((item: { id: string, qty: number }) => item.id === formData.id)
      if(!existingPortfolioItem) {
        dispatch(setDisplayAlert('You don\'t own this coin!'))
        return
      }
      const parsedQty = typeof formData.qty === 'string' ? parseInt(formData.qty) : formData.qty
      dispatch(removeItemFromPortfolioAsync(portfolioItems, {...formData, qty: parsedQty}))
    }
    
    resetForm()
  }

  const resetForm = () => {
    setFormData(DEFAULT_FORM_DATA)
    setCoinData(DEFAULT_COIN_DATA)
  }

  return (
    <TransactionFormContainer>
      <h4 className="heading">{transactionType}</h4>
        {showAlert && (
          <Alert />
        )}

      {/* current balance  */}
      <TransactionBalanceRow
        label="current usdt balance"
        amount={formatAmount(tetherData.current_price * tetherData.qty)}
        color="#141c52"
      />

      {/* select coin  */}
      <TransactionSelectCoin
        options={COINS_LIST}
        coinData={coinData}
        handleSelect={handleSelect}
      />

      {/* input quantity  */}
      <TransactionInputQuantity
        qty={formData.qty}
        handleInputChange={handleInputQty}
        handleMax={handleMaxQty}
      />

      {/* total cost & ending balance  */}    
      <TransactionEndingBalances 
        totalCost={totalCost}
        endingBalance={formatAmount(endingBalance)}
      />

      <button onClick={handleSubmit} disabled={isDisabled} >submit</button>
    </TransactionFormContainer>
  )
}