import { useEffect, useState } from "react";

function useCurrencyData(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      console.log("Currencies data fetched: ", data);
    }
  }, [data]);
  return data;
}

export default useCurrencyData;
