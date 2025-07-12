// File: client/src/pages/AddItem.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { addItem } from '../services/itemService';
import './AddItem.css';

export default function AddItem() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    description: '',
    size: '',
    condition: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addItem(form, user.token);
      alert('Item listed successfully!');
      navigate('/dashboard');
    } catch (err) {
      alert('Error adding item.');
    }
  };

  return (
    <div className="add-item-container">
      <h2 className="add-item-title">Add New Clothing Item</h2>
      <form onSubmit={handleSubmit} className="add-item-form">
        <input
          className="add-item-input"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <textarea
          className="add-item-input"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <input
          className="add-item-input"
          name="size"
          placeholder="Size (e.g., S, M, L)"
          value={form.size}
          onChange={handleChange}
          required
        />
        <input
          className="add-item-input"
          name="condition"
          placeholder="Condition (e.g., New, Gently Used)"
          value={form.condition}
          onChange={handleChange}
          required
        />
        <input
          className="add-item-input"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          required
        />
        <button className="add-item-button" type="submit">Submit Listing</button>
      </form>
    </div>
  );
}
