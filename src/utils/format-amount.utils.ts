type FormatAmountProps = {
  amount: number,
  type?: string
}

export const formatAmount = (
  amount: FormatAmountProps['amount'], 
  type: FormatAmountProps['type'] = 'dollar'
) => {
  return type === 'dollar'
    ? +amount.toFixed(4) 
    : parseInt(amount.toFixed(10))
}

// export const formatAmount = (
//   amount, 
//   type = 'dollar'
// ) => {
//   // console.log(typeof amount)

//   if(typeof amount === 'string') {
//     console.log('string detected')

//     let newAmount = parseInt(amount)

//     return type === 'dollar' 
//     ? newAmount = +newAmount.toFixed(4) 
//     : newAmount = newAmount.toFixed(10)
//   }
  
//   return type === 'dollar' 
//     ? +amount.toFixed(4) 
//     : parseInt(amount.toFixed(10))
// }