// BreakfastDairyPage.js
import React from 'react';

const BreakfastDairyPage = () => {
  const products = [
    { id: 1, name: 'Whole Milk', price: '$3.49/gallon', image: '🥛' },
    { id: 2, name: 'Greek Yogurt', price: '$4.99/pack', image: '🥄' },
    { id: 3, name: 'Farm Fresh Eggs', price: '$3.99/dozen', image: '🥚' },
    { id: 4, name: 'Butter', price: '$4.49/pack', image: '🧈' },
    { id: 5, name: 'Cheddar Cheese', price: '$5.99/block', image: '🧀' },
    { id: 6, name: 'Cream Cheese', price: '$2.99/pack', image: '🧀' }
  ];

  return (
    <div className="container py-5">
      <h1 className="mb-4">Breakfast & Dairy</h1>
      <p className="lead mb-5">Start your day right with fresh dairy products</p>
      
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

export default BreakfastDairyPage;
