// BiscuitsSnacksPage.js
import React from 'react';

const BiscuitsSnacksPage = () => {
  const products = [
    { id: 1, name: 'Potato Chips', price: '$2.99/bag', image: '🍟' },
    { id: 2, name: 'Chocolate Cookies', price: '$3.99/pack', image: '🍪' },
    { id: 3, name: 'Crackers', price: '$2.49/box', image: '🍘' },
    { id: 4, name: 'Nuts Mix', price: '$5.99/bag', image: '🥜' },
    { id: 5, name: 'Granola Bars', price: '$4.99/box', image: '🍫' },
    { id: 6, name: 'Popcorn', price: '$3.49/bag', image: '🍿' }
  ];

  return (
    <div className="container py-5">
      <h1 className="mb-4">Biscuits & Snacks</h1>
      <p className="lead mb-5">Delicious snacks for any time of day</p>
      
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <div style={{ fontSize: '4rem' }}>{product.image}</div>
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-success fw-bold">{product.price}</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BiscuitsSnacksPage;