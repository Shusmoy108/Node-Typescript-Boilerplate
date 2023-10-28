/** @format */

import express, { Request, Response } from 'express';
import { contactUs } from './controllers/contactUs';
const routers = express.Router();
//routers.post('/api/contactus', customerContact);
routers.post('/api/dummy', contactUs);

export default routers;
