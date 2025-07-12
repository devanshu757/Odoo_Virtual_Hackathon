import axios from 'axios';

const API = 'http://localhost:5000/api/items';

export const fetchItems = () => axios.get(API);
export const fetchItemById = (id) => axios.get(`${API}/${id}`);
export const addItem = (itemData, token) =>
  axios.post(API, itemData, {
    headers: { Authorization: `Bearer ${token}` },
  });

// Optional alias for clarity in some components
export const getItemById = fetchItemById;
export const getUserItems = fetchItems; // If your backend filters by token, or adapt as needed
