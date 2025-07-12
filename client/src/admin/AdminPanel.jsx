import { useEffect, useState } from 'react';
import { getPendingItems, approveItem, rejectItem } from '../services/adminService';
import { useAuth } from '../context/AuthContext';

export default function AdminPanel() {
  const { user } = useAuth();
  const [pendingItems, setPendingItems] = useState([]);

  const fetchPending = async () => {
    const res = await getPendingItems(user.token);
    setPendingItems(res.data);
  };

  useEffect(() => {
    fetchPending();
  }, []);

  const handleApprove = async (id) => {
    await approveItem(id, user.token);
    fetchPending();
  };

  const handleReject = async (id) => {
    await rejectItem(id, user.token);
    fetchPending();
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">Pending Item Listings</h2>
      {pendingItems.length === 0 ? (
        <p>No pending items.</p>
      ) : (
        <ul className="space-y-4">
          {pendingItems.map(item => (
            <li key={item._id} className="border p-4 rounded">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p>{item.description}</p>
              <div className="space-x-2 mt-2">
                <button onClick={() => handleApprove(item._id)} className="bg-green-500 text-white px-4 py-1 rounded">Approve</button>
                <button onClick={() => handleReject(item._id)} className="bg-red-500 text-white px-4 py-1 rounded">Reject</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}