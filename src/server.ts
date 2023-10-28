/** @format */

import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { Variables } from './variables';

import path from 'path';
import mongoose from 'mongoose';
import { json } from 'body-parser';
import cors from 'cors';
import routers from './routes';

dotenv.config();
const app: Express = express();

// Configure Express to use EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const options: cors.CorsOptions = {
  origin: '*',
};
// DDOS attack

// Then pass these options to cors:
app.use(cors(options));

// Header access
app.use(function (req: any, res: any, next: any): any {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,HEAD,OPTIONS,POST,PUT,DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers, Origin,Accept,' +
      'X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
  );
  res.setHeader('Cache-Control', 'no-cache');
  next();
});
app.use(json());
app.use(routers);
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to typescipt nodejs basic backend!');
});
app.listen(Variables.appPort, () => {
  console.log(`Server is running at http://localhost:${Variables.appPort}`);
});
