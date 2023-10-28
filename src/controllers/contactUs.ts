/** @format */

/** @format */

import express, { Request, Response } from 'express';
import { IValid } from '../type/validation';
import { contactUS } from '../helpers/contactusHelper';
import { contactUsValidator } from '../validators/contactUsValidator';

const router = express.Router();

export const contactUs = async (req: Request, res: Response): Promise<any> => {
  const valid: IValid = contactUsValidator(req.body);
  if (!valid.success) {
    return res.send({ success: false, error: valid.error });
  }
  const { firstName, lastName, email, phone, subject, message } = req.body;

  contactUS(
    'a@a.com',
    email,
    `${firstName} ${lastName} - ${subject}`,
    `Greetings, <br/><br/>
    Name:${firstName} ${lastName}.<br/>
    Phone: ${phone},<br/>
    Message:${message}<br/><br/>
    Thank You,<br/>
    ${firstName} ${lastName}
    `
  )
    .then(async () => {
      res.json({
        success: true,
        message: 'Your response has been sent. We will contact with you soon.',
      });
    })
    .catch((err: Error) => {
      res.json({
        success: false,
        err,
        message: 'Something went wrong, please try again later.',
      });
    });
};
export { router as customerRouter };
