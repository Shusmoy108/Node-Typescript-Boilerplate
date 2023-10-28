/** @format */

import { IValid } from 'src/type/validation';

export const ValidationHelper = (requiredFields): IValid => {
  const notGiven = [];
  const keys = Object.keys(requiredFields);
  keys.forEach((key, idx) => {
    if (!requiredFields[key] || typeof requiredFields[key] !== 'string') {
      notGiven.push(key);
    }
  });
  if (notGiven.length > 0) {
    const response: string =
      notGiven.join(', ') +
      ' missing, please provide these required fields with appropriate (string) type.';
    return {
      success: false,
      error: response,
    };
  } else {
    return {
      success: true,
      error: '',
    };
  }
};
