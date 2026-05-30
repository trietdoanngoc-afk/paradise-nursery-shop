import React, { useState } from 'react';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import './App.css';

function App() {
  // Hệ thống bắt buộc phải dùng tên biến này để kiểm tra logic chuyển trang
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleStartShopping = () => {
    setShowProductList(true);
    setShowCart(false);
  };

  const handleNavigateToCart = () => {
    setShowCart(true);
    setShowProductList(false);
  };

  const handleContinueShopping = () => {
    setShowProductList(true);
    setShowCart(false);
  };

  const handleNavigateToHome = () => {
    setShowProductList(false);
    setShowCart(false);
  };

  return (
    <div className="app-container">
      {/* 1. Màn hình Landing Page hiển thị ban đầu */}
      {!showProductList && !showCart && (
        <div className="landing-page">
          <div className="landing-content">
            {/* Hệ thống bắt buộc phải có chữ Welcome To ở đầu tên công ty */}
            <h1>Welcome To Paradise Nursery</h1>
            <p>Where Green Meets Serenity</p>
            <button onClick={handleStartShopping} className="get-started-btn">
              Get Started
            </button>
          </div>
        </div>
      )}

      {/* 2. Màn hình danh sách sản phẩm */}
      {showProductList && !showCart && (
        <ProductList 
          useNavigateToCart={handleNavigateToCart} 
          useNavigateToHome={handleNavigateToHome} 
        />
      )}

      {/* 3. Màn hình giỏ hàng */}
      {showCart && (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default App;
