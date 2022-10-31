import axios from "axios"

export const fetchMarketData = async (portfolioItems) => {
  let idString = '';

    portfolioItems.forEach((item,i) => {
      i < portfolioItems.length - 1 
        ? idString += `${item.id}%2C`
        : idString += item.id
    })

    const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${idString}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)

    const marketData = data.reduce((acc, coin) => {
      const coinData = {
        id: coin.id,
        name: coin.name,
        current_price: coin.current_price,
        img: coin.image,
        symbol: coin.symbol,
        price_change_percentage_24h: coin.price_change_percentage_24h,
      }

      acc.push(coinData)
      return acc
    }, [])

    return marketData
}

export const fetchCoinData = async (coinId) => {
  const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}?tickers=false&community_data=false&developer_data=false&sparkline=false
  `)

  const coinData = {
    id: data.id,
    name: data.name,
    current_price: data.market_data.current_price.usd,
    img: data.image.thumb,
    symbol: data.symbol
  }

  return coinData
}

// creates list of tokens for select component in transaction route
export const fetchTop250Coins = async () => {
  const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false')

  const list = data.reduce((acc,coin) => {
    const token = {
      value: coin.id,
      label: coin.name,
    }
    acc.push(token)
    return acc
  }, [])

    // console.log(list)
}

export const convertCoinValueToTetherQty = async (qty,price) => {
  const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=tether&order=market_cap_desc&per_page=100&page=1&sparkline=false`)

  // get coin's fiat amount
  const convertedAmount = qty*price

  // get qty of tether needed to buy coin
  const tetherQty = convertedAmount / data[0].current_price

  return tetherQty
}