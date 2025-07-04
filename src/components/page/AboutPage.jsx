import React from 'react';

const AboutPage = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-12 mb-5">
          <h1 className="display-4 mb-4">About Us</h1>
          <hr className="mb-4" style={{ width: '50px', height: '3px', backgroundColor: '#a690c9', opacity: '1' }} />
          <p className="lead mb-4">
            Welcome to our cake and coffee shop, where passion meets perfection in every bite and sip.
          </p>
        </div>
      </div>
      
      <div className="row mb-5">
        <div className="col-lg-6 mb-4">
          <h3>Our Story</h3>
          <p>
            Founded in 2015, our shop began with a simple dream: to create a place where people could enjoy exceptional cakes 
            and premium coffee in a warm, welcoming environment. What started as a small family business has grown into a 
            beloved local destination.
          </p>
          <p>
            We believe in using only the finest ingredients in our products. From locally-sourced dairy to premium 
            imported chocolates and freshly roasted coffee beans, quality is at the heart of everything we create.
          </p>
        </div>
        <div className="col-lg-6">
          <h3>Our Mission</h3>
          <p>
            Our mission is to delight our customers with exceptional cakes and coffee while creating a warm, welcoming 
            space for community connections. We strive to:
          </p>
          <ul className="mb-3">
            <li>Create delicious, high-quality products with the finest ingredients</li>
            <li>Provide outstanding customer service that makes everyone feel valued</li>
            <li>Support local suppliers and sustainable practices</li>
            <li>Contribute positively to our community through events and initiatives</li>
          </ul>
        </div>
      </div>
      
      <div className="row mb-5">
        <div className="col-12">
          <h3 className="mb-4">Our Values</h3>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title" style={{ color: '#a690c9' }}>Quality</h5>
                  <p className="card-text">
                    We never compromise on quality. From ingredients to presentation, excellence is our standard.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title" style={{ color: '#a690c9' }}>Creativity</h5>
                  <p className="card-text">
                    We love to innovate and create unique flavor combinations that surprise and delight.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title" style={{ color: '#a690c9' }}>Community</h5>
                  <p className="card-text">
                    We're proud to be part of the local community and strive to give back whenever possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h3>Visit Us Today</h3>
          <p className="mb-0">123 Bakery Street, Sweet Town</p>
          <p className="mb-3">Open Daily: 7 AM - 8 PM</p>
          <button className="btn px-4 py-2" style={{ backgroundColor: '#a690c9', color: 'white' }}>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;