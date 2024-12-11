import React from 'react'

const CoinCounter = ({ coins }) => {
  return (
    <div style={{
      fontSize: '20px', margin: '10px 0'
    }}>Coins: <strong>{coins}</strong></div>
  )
}

export default CoinCounter