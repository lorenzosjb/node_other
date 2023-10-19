import { dotenv } from './dotenv';

const promesa = dotenv();
promesa
    .then(response => console.log("Response: ", response))
    .catch(err => console.log(err.message));

