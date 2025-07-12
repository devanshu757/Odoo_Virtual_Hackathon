import { useEffect, useState } from 'react';
import { fetchItems } from '../services/itemService';
import ItemCard from '../components/ItemCard';

export default function Dashboard() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems().then(res => setItems(res.data));
  }, []);

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      {items.map(item => (
        <ItemCard key={item._id} item={item} />
      ))}
    </div>
  );
}