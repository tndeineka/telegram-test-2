import React, {useState} from 'react'
import CoinCounter from './CoinCounter';
import StorePage from './StorePage';

const Character = () => {
  const [coins, setCoins] = useState(0);

  const addCoins = (amount) => {
    setCoins((prevCoins) => prevCoins + amount);
  };
  const handleClick = () => {
    addCoins(1); // Add 1 coin per click
  }

  return (
    
     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: '50px', maxWidth: '380px', margin: '0 auto', maxHeight: '620px' }}>
       <h1>Mini App for Telegram</h1>

       <div onClick={handleClick}
        style={{
          width: '150px',
          height: '150px',
          backgroundColor: 'green',
          cursor: 'pointer'
        }}>{Character}</div>

       <CoinCounter coins={coins} />
       <StorePage coins={coins} />
     </div>
  )
}

export default Character