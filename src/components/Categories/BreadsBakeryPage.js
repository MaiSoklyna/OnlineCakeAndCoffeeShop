import React from 'react';

const BreadsBakeryPage = () => {
  const products = [
    { id: 1, name: 'Whole Wheat Bread', price: '$3.49/loaf', image: '🍞' },
    { id: 2, name: 'Croissants', price: '$5.99/pack', image: '🥐' },
    { id: 3, name: 'Bagels', price: '$4.99/pack', image: '🥯' },
    { id: 4, name: 'Muffins', price: '$6.99/pack', image: '🧁' },
    { id: 5, name: 'Sourdough Bread', price: '$4.99/loaf', image: '🍞' },
    { id: 6, name: 'Danish Pastry', price: '$7.99/pack', image: '🥐' }
  ];

  return (
    <div className="container py-5">
      <h1 className="mb-4">Breads & Bakery</h1>
      <p className="lead mb-5">Freshly baked goods and artisan breads</p>
      
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

export default BreadsBakeryPage;