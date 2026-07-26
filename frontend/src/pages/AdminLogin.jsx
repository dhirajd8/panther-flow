import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BACKEND_URL = 'https://panther-flow-backend.onrender.com';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.detail || 'Login failed');
      }
      const data = await res.json();
      localStorage.setItem('admin_token', data.token);
      navigate('/admin/blogs');
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: '#f7f7fb', fontFamily: 'Poppins, sans-serif' }}>
      <form onSubmit={handleLogin} className="w-full max-w-sm p-8 rounded-2xl" style={{ background: '#ffffff', boxShadow: '0 20px 60px rgba(15,15,26,0.12)' }}>
        <h1 className="text-2xl font-bold mb-6" style={{ color: '#0f0f0f' }}>Admin Login</h1>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 rounded-xl text-sm outline-none"
            style={{ border: '1.5px solid #e5e7eb' }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl text-sm outline-none"
            style={{ border: '1.5px solid #e5e7eb' }}
          />
          {error && <p className="text-sm" style={{ color: '#ef4444' }}>{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl font-bold text-white disabled:opacity-60"
            style={{ background: 'linear-gradient(135deg, #FF5A09, #FF5A09)' }}
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;