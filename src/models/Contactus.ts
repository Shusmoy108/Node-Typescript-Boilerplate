/** @format */

import { Document, Schema, Model, model } from 'mongoose';

export interface ISubscriber extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: Date;
}

const ContactUsSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: Date.now(),
  },
});

export const Subscriber: Model<ISubscriber> = model<ISubscriber>('contactUs', ContactUsSchema);
