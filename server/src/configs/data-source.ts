import "dotenv/config";
import path from "path";
import "reflect-metadata";
import { DataSource } from "typeorm";

const port = process.env.DB_PORT as number | undefined;
const parentDir = path.join(__dirname, "..");
export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  // host: process.env.DB_HOST,
  // port: port,
  // username: process.env.DB_USER,
  // password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: process.env.DB_SYNCHRONIZE === "true",
  // dropSchema: process.env.DB_SYNCHRONIZE === "true",
  entities: [`${parentDir}/entities/*.{ts,js}`],
  migrations: [`${parentDir}/migrations/*.{ts,js}`],
  logging: process.env.DB_LOGGING === "true",
});
