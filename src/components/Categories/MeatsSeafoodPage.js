// MeatsSeafoodPage.js
import React from 'react';

const MeatsSeafoodPage = () => {
  const products = [
    { id: 1, name: 'Fresh Salmon', price: '$12.99/lb', image: '🐟' },
    { id: 2, name: 'Chicken Breast', price: '$8.99/lb', image: '🍗' },
    { id: 3, name: 'Ground Beef', price: '$6.99/lb', image: '🥩' },
    { id: 4, name: 'Shrimp', price: '$15.99/lb', image: '🦐' },
    { id: 5, name: 'Pork Chops', price: '$7.99/lb', image: '🥓' },
    { id: 6, name: 'Tuna Steaks', price: '$18.99/lb', image: '🐟' }
  ];

  return (
    <div className="container py-5">
      <h1 className="mb-4">Meats & Seafood</h1>
      <p className="lead mb-5">Premium quality meats and fresh seafood</p>
      
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

export default MeatsSeafoodPage;
