/** @format */
import dotenv from 'dotenv';
dotenv.config();
const env = process.env.APP_ENV || 'local';
const appPort = process.env.PORT;
const mongoUrl = process.env.MONGO_DB_URI;
const api_key = process.env.MAILGUN_API_KEY;
const domain = process.env.MAILGUN_DOMAIN;
const email = process.env.EMAIL;
const pass = process.env.PASS;
export const Variables = {
  appPort,
  env,
  mongoUrl,
  api_key,
  domain,
  email,
  pass,
};
