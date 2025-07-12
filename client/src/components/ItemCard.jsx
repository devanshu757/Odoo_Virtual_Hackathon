import { Link } from 'react-router-dom';

export default function ItemCard({ item }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg">
      <img src={item.image} alt={item.title} className="w-full h-48 object-cover mb-2" />
      <h3 className="text-lg font-semibold">{item.title}</h3>
      <p className="text-sm text-gray-500">Size: {item.size} | Condition: {item.condition}</p>
      <Link to={`/item/${item._id}`} className="text-blue-500 underline mt-2 inline-block">View Details</Link>
    </div>
  );
}