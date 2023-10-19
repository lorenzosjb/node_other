import { ping } from './ping';

const promesa = ping("172.217.173.46", "443");
promesa
    .then(message => console.log(message))
    .catch(err => console.log(err.message));

