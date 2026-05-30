import React, { useState } from 'react';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import './App.css';

function App() {
  const [view, setView] = useState('landing');
  return (
    <div className="app-container">
      {view === 'landing' && (
        <div className="landing-page">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>
            <p>Where Green Meets Serenity</p>
            <button onClick={() => setView('products')} className="get-started-btn">Get Started</button>
          </div>
        </div>
      )}
      {view === 'products' && ( <ProductList useNavigateToCart={() => setView('cart')} useNavigateToHome={() => setView('landing')} /> )}
      {view === 'cart' && ( <CartItem onContinueShopping={() => setView('products')} /> )}
    </div>
  );
}
export default App;
