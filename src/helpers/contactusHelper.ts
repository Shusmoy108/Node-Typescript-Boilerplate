/** @format */

import { Variables } from '../variables';

export function contactUS(
  emailTo: string,
  emailFrom: string,
  subject: string,
  message: string
): Promise<any> {
  return new Promise((resolve, reject) => {
    console.log({
      from: emailFrom,
      to: emailTo,
      subject,
      html: message,
      // headers: { 'x-myheader': 'test header' },
    });
    return resolve('val');
    // transporter
    //   .sendMail({
    //     from: emailFrom,
    //     to: emailTo,
    //     subject,
    //     html: message,
    //     // headers: { 'x-myheader': 'test header' },
    //   })
    //   .then((val: any) => {
    //     return resolve(val);
    //   })
    //   .catch((err: Error) => {
    //     return reject(err);
    //   });
  });
}
