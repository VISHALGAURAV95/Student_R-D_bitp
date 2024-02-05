import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="mt-2">
      <ul className="flex justify-center space-x-4">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/about" className="hover:underline">About</Link></li>
        <li><Link to="/programs" className="hover:underline">Programs</Link></li>
        {/* Add more navigation links */}
      </ul>
    </nav>
  );
}

export default Navigation;
