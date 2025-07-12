import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchItemById } from '../services/itemService';

export default function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetchItemById(id).then(res => setItem(res.data));
  }, [id]);

  if (!item) return <p className="p-8">Loading...</p>;

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
      <img src={item.image} alt={item.title} className="w-full max-w-md" />
      <p className="mt-2">Size: {item.size}</p>
      <p>Condition: {item.condition}</p>
      <p className="mt-4">{item.description}</p>
    </div>
  );
}
