export const formatAmount = (amount, type = 'dollar') => {
  return type === 'dollar' ? +amount.toFixed(4) : +amount.toFixed(10)
}