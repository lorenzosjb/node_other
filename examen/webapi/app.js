import express from 'express';
import { createPool } from "mysql2/promise";
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import path from 'path';

import { getVariables } from '../src/dotenv.js';
import router from './router.js';

/**/

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.join(__dirname, "..", "..", ".env");

/**/

const app = express();
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());
app.use('/api', router);

/**/

const pool = createPool({
    host: "mysqldb",
    user: "root",
    password: "123456",
    port: 3306,
});

pool.on("connection", () => console.log("DB Connected!"));

app.get("/ping", async (req, res) => {
    const result = await pool.query("SELECT NOW()");
    res.json(result[0]);
});

app.get('/', (req, res) => {
    res.send("HELLO WORLD!")
});

/**/

getVariables({ path: envPath })
    .then(variables => {
        app.listen(variables.PORT, () => {
            console.log(`Listening on port ${variables.PORT}`);
        });
    });