import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { useFavorites } from '../context/FavoriteContext';

const products = [
  { id: 1, name: 'Shirt', price: 500 },
  { id: 2, name: 'Jeans', price: 1200 },
  { id: 3, name: 'Shoes', price: 2000 }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id} style={{ border: '1px solid #ddd', padding: 10, margin: 10 }}>
          <h4>{product.name} - ₹{product.price}</h4>
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
          <button onClick={() => toggleFavorite(product)} style={{ marginLeft: 10 }}>
            {favorites.find(f => f.id === product.id) ? '♥ Unfav' : '♡ Fav'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
