import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to MyApp</h1>
      <p className="text-xl mb-8">Learn about front-end and back-end with React and Node.js</p>
      <div className="space-x-4">
        <Link to="/register" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
          Register
        </Link>
        <Link to="/login" className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition-colors">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;