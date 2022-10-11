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