import { useEffect, useState } from 'react';
import './App.css';
import Character from './components/Character';
import CoinCounter from './components/CoinCounter';
import StorePage from './components/StorePage';

const tg = window.Telegram.WebApp;

function App() {
  const [coins, setCoins] = useState(0);

  useEffect(() => {
    tg.ready();
  })

  const onClose = () => {
    tg.close();
  };

  const addCoins = (amount) => {
    setCoins((prevCoins) => prevCoins + amount);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: '50px', maxWidth: '380px', margin: '0 auto', maxHeight: '620px' }}>
      <h1>Mini App for Telegram</h1>
      <button onClick={onClose}>Close</button>
      <Character addCoins={addCoins} />
      <CoinCounter coins={coins} />
      <StorePage coins={coins} />
    </div>
  );
}

export default App;
