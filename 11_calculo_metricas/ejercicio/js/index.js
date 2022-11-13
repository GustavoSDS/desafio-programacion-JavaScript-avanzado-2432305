
// 1. Cargar el archivo JSON metricas.json
// 2. Mostrar tabla con el promedio de evaluación dividido por mes
// 3. Mostrar tabla con el promedio de evaluación dividido por localidad (cuidad or estado)

const tablaLocalidad = document.getElementById('tabla-localidad');
const tablaMes = document.getElementById('tabla-mes');

fetch('../metricas.json')
    .then(respuesta => respuesta.json())
    .then(datos => {
        const accuL = {};
        const accuM = {};
        for (const index in datos) {
            const EVAL = datos[index];
            if (!accuL[EVAL.estado]) {
                accuL[EVAL.estado] = { acc: 0, contador: 0 };
            }
            accuL[EVAL.estado].acc += parseInt(EVAL.evaluacion);
            accuL[EVAL.estado].contador += 1;
            const MES = EVAL.fecha.split('-').filter((val, i) => i !== 2).join('-');

            if (!accuM[MES]) {
                accuM[MES] = { acc: 0, contador: 0 };
            }
            accuM[MES].acc += parseInt(EVAL.evaluacion);
            accuM[MES].contador += 1;
        }

        for(const key of Object.keys(accuL)){
            tablaLocalidad.appendChild(generarFila(key, Math.floor(accuL[key].acc / accuL[key].contador)));
        }
        for(const key of Object.keys(accuM)){
            tablaMes.appendChild(generarFila(key, Math.floor(accuM[key].acc / accuM[key].contador)));
        }
    });

function generarFila(texto, valor) {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.innerText = texto;
    const td2 = document.createElement('td');
    td2.innerText = valor;
    tr.appendChild(td1);
    tr.appendChild(td2);
    return tr;
}