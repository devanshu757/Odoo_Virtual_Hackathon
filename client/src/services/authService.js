import axios from 'axios';

const API = 'http://localhost:5000/api/auth';

export const loginUser = (credentials) => axios.post(`${API}/login`, credentials);
export const signupUser = (data) => axios.post(`${API}/signup`, data);
export const getCurrentUser = (token) =>
  axios.get(`${API}/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });

// Optional aliases to match different naming conventions
export const login = loginUser;
export const signup = signupUser;
