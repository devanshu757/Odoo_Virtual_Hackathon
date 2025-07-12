import { Link } from 'react-router-dom';
import './ItemCard.css';

export default function ItemCard({ item }) {
  return (
    <div className="item-card">
      <div className="item-card-image-container">
        <img src={item.image} alt={item.title} className="item-card-image" />
      </div>
      <div className="item-card-content">
        <h3 className="item-card-title">{item.title}</h3>
        <p className="item-card-meta">
          <span className="item-card-label">Size:</span> {item.size} &nbsp;|&nbsp; 
          <span className="item-card-label">Condition:</span> {item.condition}
        </p>
        <p className="item-card-description">
          {item.description.length > 80 ? item.description.slice(0, 80) + '...' : item.description}
        </p>
        <Link to={`/item/${item._id}`} className="item-card-link">
          View Details →
        </Link>
      </div>
    </div>
  );
}
