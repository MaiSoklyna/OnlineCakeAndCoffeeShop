import React from 'react';

const BeveragesPage = () => {
  const products = [
    { id: 1, name: 'Orange Juice', price: '$4.99/bottle', image: '🧃' },
    { id: 2, name: 'Sparkling Water', price: '$3.99/pack', image: '🥤' },
    { id: 3, name: 'Coffee Beans', price: '$12.99/bag', image: '☕' },
    { id: 4, name: 'Green Tea', price: '$8.99/box', image: '🍵' },
    { id: 5, name: 'Energy Drink', price: '$2.99/can', image: '🥤' },
    { id: 6, name: 'Coconut Water', price: '$5.99/pack', image: '🥥' }
  ];

  return (
    <div className="container py-5">
      <h1 className="mb-4">Beverages</h1>
      <p className="lead mb-5">Refreshing drinks for every occasion</p>
      
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

export default BeveragesPage;
