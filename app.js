const pixels = document.getElementById('pixels-text');

// const - generar un metodo

const getWidth = ()=>{
    let width = document.documentElement.clientWidth;
    // .documenElemnt - significa, como agarrar un tag, pero literalmente se agarra todo el html, 
    //buscar un elemento base adentro del document
    pixels.innerText = `${width}px`;
}

getWidth();

//evento
window.addEventListener('resize', getWidth);