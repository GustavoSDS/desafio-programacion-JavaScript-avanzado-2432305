
// Implementar un buscador de datos, donde los resultados se muestren tan
// pronto el usuario escriba texto en el input disponible

const input = document.getElementById('input');
const resultados = document.getElementById('resultados');

input.addEventListener('input', ()=>{
    resultados.innerHTML = '';
    const VALOR = input.value.toLowerCase();
    const DATOS_FILTRADOS = DATOS.filter(dato => dato.compania.toLowerCase().indexOf(VALOR)>-1);
    const FRAGMENTO = document.createDocumentFragment();
    for(const dato of DATOS_FILTRADOS){
        FRAGMENTO.appendChild(generarElemento(dato));
    }
    resultados.appendChild(FRAGMENTO);
});

function generarElemento(info) {

    const span = document.createElement('span');
    span.innerHTML = `<b>id:</b> ${info.id}<br>
    <b>nombre:</b> ${info.nombre}<br>
    <b>compañia:</b> ${info.compania}<br>
    <b>fecha de nacimiento:</b> ${info.fdn}<br>
    <b>dirección:</b> ${info.direccion}<br>
    <b>acerca:</b> ${info.acerca}`;

    return span;
}
