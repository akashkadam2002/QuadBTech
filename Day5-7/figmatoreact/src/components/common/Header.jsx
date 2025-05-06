import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Header = () => {
  return (
    <header className="bg-white py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-gray-900">
            WebbyPages
          </Link>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/templates" className="text-gray-700 hover:text-blue-600">
            Templates
          </Link>
          <Link to="/pricing" className="text-gray-700 hover:text-blue-600">
            Pricing
          </Link>
          <Link to="/docs" className="text-gray-700 hover:text-blue-600">
            Documentation
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <Button variant="outline" size="small">
              Log In
            </Button>
          </Link>
          <Link to="/signup">
            <Button variant="primary" size="small">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;