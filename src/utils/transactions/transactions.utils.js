import { formatAmount } from "../format-amount.utils"

export const calculateTotalCost = (price,qty) => 
  formatAmount(price * qty)


export const calculateEndingBalance = (beginningBal, totalCost) => 
  formatAmount(beginningBal - totalCost)