import React from 'react'

const StorePage = ({ coins }) => {
  const items = [{
    id: 1, name: '10% Discount', cost: 50
  },
  {
    id: 2, name: '20% Discount', cost: 100
  },
  {
    id: 3, name: 'Free Shipping', cost: 150
  }];

  const redeemItem = (item) => {
    if (coins >= item.cost) {
      alert(`You redeemed: ${item.name}`);
    } else {
      alert('Not enough coins to redeem this item');
    }
  };
  return (
    <div>
      <h2>Store</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}> {item.name} - {item.cost}
            <button onClick={() => redeemItem(item)}>Redeem</button></li>
        ))}
      </ul>
    </div>
  )
}

export default StorePage