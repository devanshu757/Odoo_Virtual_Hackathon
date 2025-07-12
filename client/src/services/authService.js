import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const signup = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, formData);
    return response.data; // Return the response data
  } catch (error) {
    throw error.response?.data?.message || 'Signup failed'; // Throw error message
  }
};

export const login = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, formData);
    localStorage.setItem('user', JSON.stringify(response.data)); // Save user data to local storage
    return response.data; // Return the response data
  } catch (error) {
    throw error.response?.data?.message || 'Login failed'; // Throw error message
  }
};

export const getCurrentUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null; // Parse and return user data or null
};
