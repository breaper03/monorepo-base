const API = "466d78a5be37750bf562782e";
const url = `https://v6.exchangerate-api.com/v6/${API}/latest`

interface Currency {
  coin: number
}
export const getCurrency = async (currency: string, amount: number) => {
  const res = await fetch(`${url}/${currency}`)
  const data = await res.json()
  if (currency === "USD") {
    const coin = data.conversion_rates.VES
    return (coin * amount)
  } else {
    const coin = data.conversion_rates.USD
    return (coin * amount)
  }
}

export const AllowedCurrencies = ["USD", "VES"]