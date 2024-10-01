import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Welcome to your Dashboard, {user.username}!</h2>
      <p className="mb-4">This is a protected page that only logged-in users can see.</p>
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-2">Your Account Information</h3>
        <p><strong>Username:</strong> {user.username}</p>
        {/* Add more user information here */}
      </div>
    </div>
  );
};

export default Dashboard;