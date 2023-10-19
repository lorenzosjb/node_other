import { leerArchivos } from './leerArchivos';

const promesa = leerArchivos();
promesa
    .then(response => console.log("Response: ", response))
    .catch(err => console.log(err.message));

