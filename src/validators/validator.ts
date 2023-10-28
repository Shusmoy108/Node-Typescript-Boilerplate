/** @format */

import { IValid } from '../type/validation';

export class Validator {
  public loginValidator(data: any): IValid {
    const valid: IValid = {
      success: true,
      error: '',
    };
    if (data.email === '' || !data.hasOwnProperty('email')) {
      valid.success = false;
      valid.error = valid.error + ' Email';
    }
    if (data.password === '' || !data.hasOwnProperty('password')) {
      valid.success = false;
      valid.error = valid.error + (valid.error === '' ? '' : ',') + ' Password';
    }
    if (valid.success === false) {
      valid.error =
        'Fill up all the required information approriately. ' + valid.error + ' missing';
    }
    return valid;
  }
}
