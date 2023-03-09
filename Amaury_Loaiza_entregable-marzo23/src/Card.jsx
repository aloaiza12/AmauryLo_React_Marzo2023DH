import React from 'react';

function Card(props) {
  return (
    <div>
      <p>Favorite Song: {props.favoriteSong}</p>
      <p>Favorite Artist: {props.favoriteArtist}</p>
    </div>
  );
}

export default Card;
