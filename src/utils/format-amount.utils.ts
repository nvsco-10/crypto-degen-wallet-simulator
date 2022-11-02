type FormatAmountProps = {
  amount: number,
  type?: string
}

export const formatAmount = (
  amount: FormatAmountProps['amount'], 
  type: FormatAmountProps['type'] = 'dollar'
) => {
  switch(type) {
    case 'dollar':
      return +amount.toFixed(4)

    case 'qty':
      return +amount.toFixed(6) 

    default: 
      return parseInt(amount.toFixed(10))
  }
}
