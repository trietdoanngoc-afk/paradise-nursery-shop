import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem({ onContinueShopping }) {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const parseCost = (costString) => parseFloat(costString.replace('$', ''));
  const calculateTotalAmount = () => cartItems.reduce((total, item) => total + parseCost(item.cost) * item.quantity, 0);
  const calculateTotalCost = (item) => parseCost(item.cost) * item.quantity;

  return (
    <div style={{padding: '30px', maxWidth: '800px', margin: 'auto'}}>
      <h2>Shopping Cart</h2>
      <h3>Total Cart Amount: ${calculateTotalAmount()}</h3>
      {cartItems.length === 0 ? ( <p>Your cart is empty.</p> ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} style={{display: 'flex', gap: '20px', marginBottom: '20px', alignItems: 'center'}}>
              <img src={item.image} alt={item.name} style={{width: '120px', height: '120px', objectFit: 'cover'}} />
              <div>
                <h4>{item.name}</h4>
                <p>Unit Price: {item.cost}</p>
                <p>Subtotal: ${calculateTotalCost(item)}</p>
                <div style={{margin: '10px 0'}}>
                  <button onClick={() => dispatch(updateQuantity({name: item.name, quantity: Math.max(1, item.quantity - 1)}))}>-</button>
                  <span style={{margin: '0 10px'}}>{item.quantity}</span>
                  <button onClick={() => dispatch(updateQuantity({name: item.name, quantity: item.quantity + 1}))}>+</button>
                </div>
                <button onClick={() => dispatch(removeItem(item.name))} style={{backgroundColor: '#e53935', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer'}}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div style={{marginTop: '30px', display: 'flex', gap: '20px'}}>
        <button onClick={onContinueShopping} className="continue-btn">Continue Shopping</button>
        <button onClick={() => alert('Coming Soon')} className="checkout-btn" style={{backgroundColor: '#0288d1'}}>Checkout</button>
      </div>
    </div>
  );
}
export default CartItem;
