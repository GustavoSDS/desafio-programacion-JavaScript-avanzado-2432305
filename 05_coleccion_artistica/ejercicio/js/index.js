
// Cargar las imágenes contenidas en la constante rutasImagenes utilizando Promise.all
// Luego cargadas, agregarlas al div #contenedor

const rutasImagenes = imagenes;
const contenedor = document.getElementById('contenedor');

const PROMESAS = [];

for (const img of rutasImagenes) {
    PROMESAS.push(fetch(img.src));
}

Promise.all(PROMESAS)
   .then(respuestas => {
    Promise.all(respuestas.map(respuesta => respuesta.blob()))
    .then(blobs => {
        const fragmento = document.createDocumentFragment();
        for (const blob of blobs) {
            const IMG_URL = URL.createObjectURL(blob);
            const IMG_HTML = document.createElement('img');
            IMG_HTML.src = IMG_URL;
            fragmento.appendChild(IMG_HTML); 
        }
        return fragmento;
    }).then(fragmento=> contenedor.appendChild(fragmento));
   });
