const obtenerGifs = async () => {
  const gifsContainers = document.getElementById('gifs');
  const gifTemplate = document.getElementById('gif');

  const request = await fetch('https://api.giphy.com/v1/gifs/search?api_key=lerx9FDWD5PH78M207Cj95ac4KTt8G3v&q=goku');
  const respuesta = await request.json();
  console.log(respuesta.data[0].images.original.url);

  respuesta.data.slice(0, 8).forEach(gif => {
    const newGifCard = gifTemplate.cloneNode(true);
    const img = newGifCard.querySelector('img');
    img.src = gif.images.original.url; // asegurarse que la propiedad exista
    gifsContainers.appendChild(newGifCard);
  });

  gifTemplate.remove();
}

obtenerGifs();
