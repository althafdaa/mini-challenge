import { BASE_URL } from '../utils/constant';

export const loginUser = (instance, payload) => {
  return instance.post(`${BASE_URL}/auth/login`, payload);
};

export const registerUser = (instance, payload) => {
  return instance.post(`${BASE_URL}/users`, payload);
};
