/** @format */

import { IValid } from 'src/type/validation';
import { ValidationHelper } from './HelperFunction';

export const contactUsValidator = (obj: any): IValid => {
  let response: IValid = {
    success: true,
    error: '',
  };
  const { firstName, lastName, phone, subject, message, email } = obj;
  response = ValidationHelper({
    firstName,
    lastName,
    phone,
    subject,
    message,
    email,
  });

  const validateEmail = (tempEmail: any) => {
    return String(tempEmail)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  if (!validateEmail(email)) {
    response = {
      success: false,
      error: response.error + ' Valid email is required. ',
    };
  }

  return response;
};
