import 'dotenv/config';
import { Pool, types } from "pg"

types.setTypeParser(1082, (value: string) => value);

const requiredEnvVars = [
    'POSTGRES_HOST',
    'POSTGRES_PORT',
    'POSTGRES_USER',
    'POSTGRES_DATABASE',
    'POSTGRES_PASSWORD',
]

const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
    console.error(`missing required enviroment variables: ${missingEnvVars}`);
    process.exit(1)
}

const pool = new Pool({
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE
});

export default pool;