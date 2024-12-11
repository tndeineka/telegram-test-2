import React, { useState } from "react";
import coin from "../../assets/images/coin.png";
import "./Clicker.css";

const Clicker = () => {
  const [coins, setCoins] = useState(0);
  const [effects, setEffects] = useState([]);

  const addCoins = (amount, x, y) => {
    setCoins((prevCoins) => prevCoins + amount);

    const id = Date.now();
    setEffects((prevEffects) => [...prevEffects, { id, x, y }]);

    setTimeout(() => {
      setEffects((prevEffects) =>
        prevEffects.filter((effect) => effect.id !== id)
      );
    }, 1000);
  };

  const handleClick = (e) => {
    const containerRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - containerRect.left;
    const y = e.clientY - containerRect.top;
    addCoins(1, x, y); // Add 1 coin per click
  };

  return (
    <div className="clickerWrap">
      <div className="coins">
        <img src={coin} alt="Coin" className="imgCoin" />
        <span className="coinQuant">{coins}</span>
      </div>

      <div onClick={handleClick} className="clickerItem">
        {Clicker}
      </div>

      {effects.map((effect) => (
        <span
          key={effect.id}
          className="floatingText"
          style={{ left: `${effect.x}px`, top: `${effect.y}px` }}
        >
          +1
        </span>
      ))}
    </div>
  );
};

export default Clicker;

