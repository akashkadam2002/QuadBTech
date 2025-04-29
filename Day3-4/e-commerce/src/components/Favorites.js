import React from 'react';
import { useFavorites } from '../context/FavoriteContext';

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div>
      <h2>Favorites</h2>
      {favorites.map(item => (
        <div key={item.id} style={{ border: '1px solid #ccc', margin: 5, padding: 5 }}>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
