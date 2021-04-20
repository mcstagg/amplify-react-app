import React,
  {
    useState,
    useEffect
  }
from 'react';

import { API } from 'aws-amplify';
import './App.css';

const App = () => {
  // Create coins variable and set to empty array
  const [coins, updateCoins] = useState([])

  // Define function to all API
  async function fetchCoins() {

    const { limit, start } = input
    const data = await API.get('cryptoapi', `/coins?limit=${limit}&start=${start}`)
    updateCoins(data.coins)
  }

  // Call fetchCoins function when component loads
  useEffect(() => {
    fetchCoins()
  }, [])

  // Create additional state to hold user input for limit and start properties
  const [input, updateInput] = useState({ limit: 50, start: 0 })

  // Create a new function to allow users to update the input values
  function updateInputValues(type, value) {
    updateInput({ ...input, [type]: value })
  }

  return (
    <div className="App">
      {
        coins.map((coin, index) => (
          <div key={index}>
            <h2>{coin.name} - {coin.symbol}</h2>
            <h5>${coin.price_usd}</h5>
          </div>
        ))
      }
    </div>
  );
}

export default App;
