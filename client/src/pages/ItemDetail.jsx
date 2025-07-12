// File: client/src/pages/ItemDetail.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getItemById } from '../services/itemService';
import './ItemDetail.css';

export default function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const res = await getItemById(id);
      setItem(res.data);
    };
    fetchItem();
  }, [id]);

  if (!item) return <div className="loading">Loading...</div>;

  return (
    <div className="item-detail-container">
      <img src={item.image} alt={item.title} className="item-detail-image" />
      <div className="item-detail-content">
        <h2 className="item-detail-title">{item.title}</h2>
        <p className="item-detail-meta">
          <strong>Size:</strong> {item.size} &nbsp;|&nbsp; <strong>Condition:</strong> {item.condition}
        </p>
        <p className="item-detail-description">{item.description}</p>
      </div>
    </div>
  );
}
