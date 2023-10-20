import { createPool } from "mysql2/promise";
import express from 'express';
import { config } from 'dotenv';

// Load environment variables
config();

/**/

const router = express.Router();
router.get("/ping", async (req, res) => {
    const result = await pool.query("SELECT NOW()");
    res.json(result[0]);
});

/**/

export const pool = createPool({
    // host: "localhost", // para debuggear localmente fuera del 
    host: process.env.MYSQL_DB_HOST,
    database: process.env.MYSQL_DB_DATABASE,
    port: process.env.MYSQL_DB_LOCAL_PORT,
    user: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
  });
pool.on("connection", () => console.log("DB Connected!"));

export default router;