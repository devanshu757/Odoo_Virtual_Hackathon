import axios from 'axios';
const API = 'http://localhost:5000/api/admin';
export const getPendingItems = (token) => axios.get(`${API}/pending`, { headers: { Authorization: `Bearer ${token}` } });
export const approveItem = (id, token) => axios.post(`${API}/approve/${id}`, {}, { headers: { Authorization: `Bearer ${token}` } });
export const rejectItem = (id, token) => axios.post(`${API}/reject/${id}`, {}, { headers: { Authorization: `Bearer ${token}` } });
