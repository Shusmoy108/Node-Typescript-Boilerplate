/** @format */
import dotenv from 'dotenv';
dotenv.config();
const env = process.env.APP_ENV || 'local';
const appPort = process.env.PORT;
const mongoUrl = process.env.MONGO_DB_URI;

export const Variables = {
  appPort,
  env,
  mongoUrl,
};
