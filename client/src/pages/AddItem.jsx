import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { addItem } from '../services/itemService';

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
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Add New Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full p-2 border" placeholder="Title" onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <input className="w-full p-2 border" placeholder="Description" onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <input className="w-full p-2 border" placeholder="Size" onChange={(e) => setForm({ ...form, size: e.target.value })} />
        <input className="w-full p-2 border" placeholder="Condition" onChange={(e) => setForm({ ...form, condition: e.target.value })} />
        <input className="w-full p-2 border" placeholder="Image URL" onChange={(e) => setForm({ ...form, image: e.target.value })} />
        <button className="bg-blue-600 text-white w-full p-2">Submit</button>
      </form>
    </div>
  );
}