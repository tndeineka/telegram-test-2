import React from 'react'

const Character = ({ addCoins }) => {

  const handleClick = () => {
    addCoins(1); // Add 1 coin per click
  }

  return (
    <div onClick={handleClick}
      style={{
        width: '150px',
        height: '150px',
        backgroundColor: 'green',
        cursor: 'pointer'
      }}>{Character}</div>
  )
}

export default Character