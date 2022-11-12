
// Crear una clase que cargue una imágen y que se muestre en la página.
const RUTA_IMAGEN = ['./zoom.jpg', './cat.jpg'];

class Imagen {
    _ruta;
    constructor(ruta) {
        this._ruta = ruta;
    }
    cargarImagen() {
        RUTA_IMAGEN.forEach(ruta => {
            const IMG = document.createElement('img');
            IMG.src = ruta;
            document.body.appendChild(IMG);
        });
    }
}
const IMAGEN = new Imagen(RUTA_IMAGEN);
IMAGEN.cargarImagen();
