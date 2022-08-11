import pkg from "pg";
const { Client } = pkg;
import dotenv from 'dotenv'
dotenv.config()

const database = new Client(
  process.env.NODE_ENV === "test"
    ? {
        user: "vih",
        host: "localhost",
        database: "tests_products",
        password: "1234",
        port: 5432,
      }
    : {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        //connectionTimeoutMillis: 30000000,
        //query_timeout: 3000
      }
);

export const startDatabase = async () => {
  await database.connect();
};

export default database;
