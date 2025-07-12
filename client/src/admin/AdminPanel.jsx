// File: client/src/pages/AdminPanel.jsx
import { useEffect, useState } from 'react';
import { getAllUsers, getAllItems } from '../services/adminService';
import './AdminPanel.css';

export default function AdminPanel() {
  const [users, setUsers] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const usersRes = await getAllUsers();
      const itemsRes = await getAllItems();
      setUsers(usersRes.data);
      setItems(itemsRes.data);
    };
    fetchData();
  }, []);

  return (
    <div className="admin-panel">
      <h2 className="admin-heading">Admin Dashboard</h2>

      <section className="admin-section">
        <h3>All Users</h3>
        <div className="admin-table">
          <div className="admin-row admin-header">
            <span>Name</span>
            <span>Email</span>
            <span>Role</span>
          </div>
          {users.map(user => (
            <div key={user._id} className="admin-row">
              <span>{user.name}</span>
              <span>{user.email}</span>
              <span>{user.role}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="admin-section">
        <h3>All Items</h3>
        <div className="admin-table">
          <div className="admin-row admin-header">
            <span>Title</span>
            <span>Owner</span>
            <span>Status</span>
          </div>
          {items.map(item => (
            <div key={item._id} className="admin-row">
              <span>{item.title}</span>
              <span>{item.owner?.name || 'N/A'}</span>
              <span>{item.status || 'Pending'}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
