import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import AboutUs from './AboutUs';

function ProductList({ useNavigateToCart, useNavigateToHome }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    { category: "Air Purifying", plants: [{ name: "Snake Plant", image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?q=80&w=200", cost: "$15" }, { name: "Spider Plant", image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=200", cost: "$12" }, { name: "Peace Lily", image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355?q=80&w=200", cost: "$18" }, { name: "Boston Fern", image: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?q=80&w=200", cost: "$14" }, { name: "Aloe Vera", image: "https://images.unsplash.com/photo-1596547613531-78de2299a7cd?q=80&w=200", cost: "$10" }, { name: "English Ivy", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=200", cost: "$16" }] },
    { category: "Aromatic", plants: [{ name: "Lavender", image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=200", cost: "$20" }, { name: "Jasmine", image: "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?q=80&w=200", cost: "$22" }, { name: "Rosemary", image: "https://images.unsplash.com/photo-1515549832467-8783363e19b6?q=80&w=200", cost: "$15" }, { name: "Mint", image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?q=80&w=200", cost: "$8" }, { name: "Basil", image: "https://images.unsplash.com/photo-1594503373431-d8ec1b0f1990?q=80&w=200", cost: "$9" }, { name: "Lemon Balm", image: "https://images.unsplash.com/photo-1574343105520-22c6e3bca5bf?q=80&w=200", cost: "$11" }] },
    { category: "Low Maintenance", plants: [{ name: "ZZ Plant", image: "https://images.unsplash.com/photo-1632203171982-cc0df6e9ceb4?q=80&w=200", cost: "$25" }, { name: "Pothos", image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=200", cost: "$13" }, { name: "Cast Iron", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=200", cost: "$30" }, { name: "Succulent Mix", image: "https://images.unsplash.com/photo-1520302832675-a099f793a120?q=80&w=200", cost: "$12" }, { name: "Jade Plant", image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=200", cost: "$17" }, { name: "Chinese Evergreen", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=200", cost: "$19" }] }
  ];

  return (
    <div>
      <nav className="navbar">
        <div className="nav-logo" onClick={useNavigateToHome} style={{cursor:'pointer'}}>Paradise Nursery</div>
        <div className="nav-links">
          <button onClick={useNavigateToHome}>Home</button>
          <button onClick={() => window.scrollTo({top: 400, behavior: 'smooth'})}>Plants</button>
          <button onClick={useNavigateToCart}>Cart 🛒 <span className="cart-badge">{totalItems}</span></button>
        </div>
      </nav>
      <div style={{padding: '20px'}}><AboutUs /></div>
      <div className="product-container">
        {plantsArray.map((cat, index) => (
          <div key={index}>
            <h2 style={{paddingLeft: '20px', color: '#2e7d32'}}>{cat.category}</h2>
            <div className="plant-grid">
              {cat.plants.map((plant, pIndex) => {
                const isAdded = cartItems.some(item => item.name === plant.name);
                return (
                  <div key={pIndex} className="plant-card">
                    <img src={plant.image} alt={plant.name} className="plant-img" />
                    <h3>{plant.name}</h3>
                    <p style={{fontWeight: 'bold'}}>{plant.cost}</p>
                    <button onClick={() => dispatch(addItem(plant))} disabled={isAdded} className="add-to-cart-btn">
                      {isAdded ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProductList;
