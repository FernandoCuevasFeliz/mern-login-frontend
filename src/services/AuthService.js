import { URL_BACKEND } from 'consts';

import axios from 'axios';

export class AuthService {
  static login = async (username, password) => {
    try {
      const response = await axios.post(`${URL_BACKEND}/auth/signup`, {
        username,
        password,
      });

      localStorage.setItem('token', response.data?.token);

      const user = response.data?.data;
      delete user?._id;

      localStorage.setItem('user', JSON.stringify(user));

      return response.data;
    } catch (error) {
      return error.response.data;
    }
  };
}
