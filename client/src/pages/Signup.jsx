
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../services/authService';

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(form);
      alert('Signup successful! Please login.');
      navigate('/login');
    } catch (err) {
      alert('Signup failed. Try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border" onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input type="email" placeholder="Email" className="w-full p-2 border" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password" className="w-full p-2 border" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button className="w-full bg-blue-600 text-white py-2">Signup</button>
      </form>
    </div>
  );
}
