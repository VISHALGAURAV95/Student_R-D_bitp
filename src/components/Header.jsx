import React from 'react';
import Navigation from './Navigation';
function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 text-center">
      <h1 className="text-2xl font-bold">Birla Institue of Technology,Patna</h1>
      <p>Welcome to the Student Development and Research Cell</p>
      <Navigation></Navigation>
    </header>
  );
}

export default Header;
