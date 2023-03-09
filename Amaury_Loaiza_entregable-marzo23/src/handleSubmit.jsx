const handleSubmit = (event) => {
    event.preventDefault();
    
    const songInput = event.target.elements[0].value.trim();
    const artistInput = event.target.elements[1].value.trim();
  
    if (songInput.length < 3 || songInput[0] === ' ') {
      alert('Please check that the information is correct.');
      return;
    }
  
    if (artistInput.length < 6) {
      alert('Please check that the information is correct.');
      return;
    }
  
    setFavoriteSong(songInput);
    setFavoriteArtist(artistInput);
  };
  