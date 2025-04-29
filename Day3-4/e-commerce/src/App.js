import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Favorites from './components/Favorites';
import { FavoriteProvider } from './context/FavoriteContext';

function App() {
  return (
    <FavoriteProvider>
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
        <ProductList />
        <Cart />
        <Favorites />
      </div>
    </FavoriteProvider>
  );
}

export default App;
