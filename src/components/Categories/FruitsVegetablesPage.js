import React from 'react';

const FruitsVegetablesPage = () => {
  const products = [
    { id: 1, name: 'Fresh Apples', price: '$2.99/lb', image: '🍎' },
    { id: 2, name: 'Organic Bananas', price: '$1.49/lb', image: '🍌' },
    { id: 3, name: 'Fresh Spinach', price: '$3.99/bunch', image: '🥬' },
    { id: 4, name: 'Carrots', price: '$1.99/lb', image: '🥕' },
    { id: 5, name: 'Tomatoes', price: '$2.49/lb', image: '🍅' },
    { id: 6, name: 'Broccoli', price: '$2.99/head', image: '🥦' }
  ];

  return (
    <div className="container py-5">
      <h1 className="mb-4">Fruits & Vegetables</h1>
      <p className="lead mb-5">Fresh, organic produce delivered to your door</p>
      
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

export default FruitsVegetablesPage;
