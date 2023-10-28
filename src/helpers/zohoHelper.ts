import axios from 'axios';
import { error } from 'console';
import dotenv from 'dotenv';
dotenv.config();

export function getToken(): Promise<any> {
  return new Promise(async (resolve, reject) => {
    const fd = new FormData();
    fd.append('refresh_token', process.env.ZOHO_REFRESH_TOKEN);
    fd.append('client_id', process.env.ZOHO_CLIENT_ID);
    fd.append('client_secret', process.env.ZOHO_CLIENT_SECRET);
    fd.append('grant_type', process.env.ZOHO_GRANT_TYPE);
    await axios
      .post(`https://accounts.zoho.com/oauth/v2/token`, fd)
      .then(async (response) => {
        return resolve(`Zoho-oauthtoken ${response.data.access_token}`);
      })
      .catch((error) => {
        return reject(error);
      });
  });
}

export function getStartedLead(email: string): Promise<any> {
  return new Promise(async (resolve, reject) => {
    await getToken()
      .then(async (token) => {
        await axios
          .post(
            `https://www.zohoapis.com/crm/v2/Leads`,
            {
              data: [
                {
                  Lead_Source: 'Girmairi Website Contact Us Not Finished',
                  Email: email,
                  Last_Name: email,
                  Lead_Status: process.env.ZOHO_LEAD_STATUS,
                },
              ],
            },
            {
              headers: {
                Authorization: token,
              },
            }
          )
          .then(async (response) => {
            return resolve(response.data);
          })
          .catch((error) => {
            return reject(error);
          });
      })
      .catch((error) => {
        return reject(error);
      });
  });
}

export function contactusLead(
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  subject: string,
  message: string
): Promise<any> {
  return new Promise(async (resolve, reject) => {
    await getToken()
      .then(async (token) => {
        await axios
          .post(
            `https://www.zohoapis.com/crm/v2/Leads`,
            {
              data: [
                {
                  Lead_Source: 'Girmairi Website Contact Us Finished',
                  Email: email,
                  First_Name: firstName,
                  Last_Name: lastName,
                  Phone: phone,
                  Description: `Subject: ${subject}\nDescription:${message}`,
                  Lead_Status: process.env.ZOHO_LEAD_STATUS,
                },
              ],
            },
            {
              headers: {
                Authorization: token,
              },
            }
          )
          .then(async (response) => {
            return resolve(response.data);
          })
          .catch((error) => {
            return reject(error);
          });
      })
      .catch((error) => {
        return reject(error);
      });
  });
}
