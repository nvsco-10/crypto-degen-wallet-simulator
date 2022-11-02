import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"

import { addItemToPortfolioAsync, removeItemFromPortfolioAsync } from "../../store/portfolio/portfolio.action"
import { selectTetherData, selectPortfolioItems } from "../../store/portfolio/portfolio.selector"
import { setDisplayAlert } from "../../store/transaction/transaction.action"
import { selectTransactionType, selectShowAlert } from "../../store/transaction/transaction.selector"

import { TransactionSelectCoin } from "../../components/transaction-select-coin/transaction-select-coin.component"
import { TransactionInputQuantity } from "../../components/transaction-input-quantity/transaction-input-quantity.component"
import { IoArrowBack } from "react-icons/io5"

import { TransactionContainer, TransactionHeader, BalanceContainer, TransactionForm } from "./transaction.styles"

import { COINS_LIST } from "../../utils/coingecko/coinslist.utils"
import { formatAmount } from "../../utils/format-amount.utils"
import { calculateTotalCost } from "../../utils/transactions/transactions.utils"
import { fetchCoinData } from '../../utils/coingecko/coingecko.utils'
import { TransactionBalance } from "../../components/transaction-balance/transaction-balance.component"
import { Alert } from "../../components/alert/alert.component"


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

export const Transaction = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA)
  const [coinData, setCoinData] = useState(DEFAULT_COIN_DATA)
  const [totalCost, setTotalCost] = useState(0)
  const [endingBalance, setEndingBalance] = useState(0)
  const [isDisabled, setIsDisabled] = useState(true)
  const showAlert = useSelector(selectShowAlert)

  const portfolioItems = useSelector(selectPortfolioItems)
  const tetherData = useSelector(selectTetherData)
  const transactionType = useSelector(selectTransactionType)

  // get coin data
  useEffect(() => {
    const getData = async (id) => {
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
    let balance;

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

  // const showAlertBox = () => {
  //   setShowAlert(true)

  //   setTimeout(() => {
  //     setShowAlert(false)
  //   }, 2000)
  // }

  const handleSelect = (e,action) => {
    setFormData({...formData, [action.name]: e.value})
  }

  const handleInputQty = (e) => {
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
        const existingPortfolioItem = portfolioItems.find((item) => coinData.id === item.id)

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
      dispatch(addItemToPortfolioAsync(portfolioItems, {...formData, qty: parseInt(formData.qty)}))
    }

    if (transactionType === 'sell') {
      const existingPortfolioItem = portfolioItems.find(item => item.id === formData.id)
      if(!existingPortfolioItem) {
        dispatch(setDisplayAlert('You don\'t own this coin!'))
        return
      }

      dispatch(removeItemFromPortfolioAsync(portfolioItems, {...formData, qty: parseInt(formData.qty)}))
    }
    
    resetForm()
  }

  const resetForm = () => {
    setFormData(DEFAULT_FORM_DATA)
    setCoinData(DEFAULT_COIN_DATA)
  }

  return (
    <TransactionContainer>
      <TransactionHeader>
        <div className="icon-btn" onClick={() => navigate(-1)}>
          <IoArrowBack className="icon" />
        </div>
        <div className="spacer">
        </div>
      </TransactionHeader>
      <TransactionForm>
        <h4 className="heading">{transactionType}</h4>
        {showAlert && (
          <Alert />
        )}
        <BalanceContainer>
          <TransactionBalance
            label="current usdt balance"
            amount={formatAmount(tetherData.current_price * tetherData.qty)}
          />
        </BalanceContainer>

        <TransactionSelectCoin
          options={COINS_LIST}
          coinData={coinData}
          handleSelect={handleSelect}
        />

        <TransactionInputQuantity
          formData={formData}
          handleInputChange={handleInputQty}
          handleMax={handleMaxQty}
        />

        <BalanceContainer>
          <TransactionBalance
            label="total"
            amount={totalCost}
          />
          <TransactionBalance
            label="ending usdt balance"
            amount={formatAmount(endingBalance)}
          />
        </BalanceContainer>

        <button onClick={handleSubmit} disabled={isDisabled} >submit</button>
      </TransactionForm>
    </TransactionContainer>
  )
}

