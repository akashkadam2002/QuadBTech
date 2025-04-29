import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store/cartSlice';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>
      {cart.map(item => (
        <div key={item.id} style={{ border: '1px solid #eee', margin: 5, padding: 5 }}>
          <span>{item.name} - ₹{item.price}</span>
          <button onClick={() => dispatch(removeFromCart(item.id))} style={{ marginLeft: 10 }}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
