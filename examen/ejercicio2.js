import { obtenerDatosPromise } from './obtenerDatosPromise';

const promesa = obtenerDatosPromise((param1, param2) => { console.log(param1, param2); });
promesa
    .then(data => console.log(data))
    .catch(err => console.log(err.message));
