// File: client/src/pages/Dashboard.jsx
import { useEffect, useState } from 'react';
import { getUserItems } from '../services/itemService';
import ItemCard from '../components/ItemCard';
import './Dashboard.css';

export default function Dashboard() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await getUserItems();
      setItems(res.data);
    };
    fetchItems();
  }, []);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Your Listed Items</h2>
      <div className="dashboard-items-grid">
        {items.length ? (
          items.map(item => <ItemCard key={item._id} item={item} />)
        ) : (
          <p className="dashboard-empty">You haven't listed any items yet.</p>
        )}
      </div>
    </div>
  );
}
