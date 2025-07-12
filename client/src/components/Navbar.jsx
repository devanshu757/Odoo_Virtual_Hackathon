import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-700 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold">ReWear</Link>
      <div className="space-x-4">
        {user ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/add">Add Item</Link>
            {user.role === 'admin' && <Link to="/admin">Admin</Link>}
            <button onClick={logout} className="underline">Logout</button>
          </>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
}
