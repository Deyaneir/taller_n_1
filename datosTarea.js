const obtenerGifs=async()=>{
    const gifsContainers=document.getElementById('gifs');
    const gifTemplate=document.getElementById('gif')
    const request = await fetch('http://api.giphy.com/v1/gifs/search?api_key=lerx9FDWD5PH78M207Cj95ac4KTt8G3v&q=goku') //fetch metodo que me permite hacer llamadas a una api await async se puede realizar mas cosas hasta que llege la respueste
    // ver la documentacion de la api
    const respuesta=await request.json()
    console.log(respuesta.data[0].images.original.url);// muestra desde las opciones del desarrollador el const q edimos
    respuesta.data.slice(0, 8).forEach(gif => {
        const newGifCard = gifTemplate.cloneNode(true); //hacer una copia
        const img = newGifCard.querySelector('img'); // tipo de selector
        img.src = gif.images.downsized.url;
; //pintar la imagen
        gifsContainers.appendChild(newGifCard); //agregar el hijo a memecard
    });
    gifTemplate.remove()
}
obtenerGifs()