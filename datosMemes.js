const obtenerMemes=async()=>{
    const memesContainers=document.getElementById('list-memes');
    const memeTemplate=document.getElementById('meme')
    const request = await fetch('https://api.imgflip.com/get_memes') //fetch metodo que me permite hacer llamadas a una api await async se puede realizar mas cosas hasta que llege la respueste
    // ver la documentacion de la api
    const respuesta=await request.json()
    console.log(respuesta.data.memes[0].url);// muestra desde las opciones del desarrollador el const q edimos
    respuesta.data.memes.slice(0, 8).forEach(meme => {
        const newMemeCard = memeTemplate.cloneNode(true); //hacer una copia
        const img = newMemeCard.querySelector('img'); // tipo de selector
        img.src = meme.url; //pintar la imagen
        memesContainers.appendChild(newMemeCard); //agregar el hijo a memecard
    });
    memeTemplate.remove()
}
obtenerMemes()