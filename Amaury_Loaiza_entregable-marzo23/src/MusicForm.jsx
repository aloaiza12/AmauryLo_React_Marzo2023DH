import React, { useState } from 'react';

function Card(props) {
  return (
    <div>
      <p>Favorite Song: {props.favoriteSong}</p>
      <p>Favorite Artist: {props.favoriteArtist}</p>
    </div>
  );
}

function MusicForm() {
  const [favoriteSong, setFavoriteSong] = useState('');
  const [favoriteArtist, setFavoriteArtist] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Favorite Song:
        <input
          type="text"
          value={favoriteSong}
          onChange={(event) => setFavoriteSong(event.target.value)}
        />
      </label>
      <br />
      <label>
        Favorite Artist:
        <input
          type="text"
          value={favoriteArtist}
          onChange={(event) => setFavoriteArtist(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
      <br />
      <Card favoriteSong={favoriteSong} favoriteArtist={favoriteArtist} />
    </form>
  );
}

export default MusicForm;
