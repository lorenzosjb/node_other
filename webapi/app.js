import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import path from 'path';

import routerApi from './router.js';
import routerDB from './apidb.js';

/**/

// Como obtener el path de archivos usando imports
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.join(__dirname, "..", ".env");

/**/

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// setup middleware /api
app.use('/api', routerApi);
app.use('/db', routerDB);

// default page
app.get('/', (req, res) => {
    res.send("HELLO WORLD!")
});

/**/

app.listen(process.env.NODE_LOCAL_PORT, () => {
    console.log(`Listening on port ${process.env.NODE_LOCAL_PORT}`);
});
