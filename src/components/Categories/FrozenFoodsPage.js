import React from 'react';

const FrozenFoodsPage = () => {
  const products = [
    { id: 1, name: 'Frozen Pizza', price: '$6.99/each', image: '🍕' },
    { id: 2, name: 'Ice Cream', price: '$4.99/pint', image: '🍨' },
    { id: 3, name: 'Frozen Vegetables', price: '$3.99/bag', image: '🥶' },
    { id: 4, name: 'Frozen Berries', price: '$5.99/bag', image: '🫐' },
    { id: 5, name: 'TV Dinners', price: '$3.49/meal', image: '🍽️' },
    { id: 6, name: 'Frozen Waffles', price: '$4.49/box', image: '🧇' }
  ];

  return (
    <div className="container py-5">
      <h1 className="mb-4">Frozen Foods</h1>
      <p className="lead mb-5">Convenient frozen meals and treats</p>
      
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

export default FrozenFoodsPage;