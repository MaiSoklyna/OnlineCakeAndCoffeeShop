// GroceryStaplesPage.js
import React from 'react';

const GroceryStaplesPage = () => {
  const products = [
    { id: 1, name: 'White Rice', price: '$4.99/bag', image: '🍚' },
    { id: 2, name: 'Pasta', price: '$1.99/box', image: '🍝' },
    { id: 3, name: 'Olive Oil', price: '$8.99/bottle', image: '🫒' },
    { id: 4, name: 'Salt', price: '$1.49/box', image: '🧂' },
    { id: 5, name: 'Sugar', price: '$2.99/bag', image: '🍯' },
    { id: 6, name: 'Flour', price: '$3.99/bag', image: '🌾' }
  ];

  return (
    <div className="container py-5">
      <h1 className="mb-4">Grocery & Staples</h1>
      <p className="lead mb-5">Essential ingredients for your pantry</p>
      
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

export default GroceryStaplesPage;
