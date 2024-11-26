import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <TrendingUp className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900">Arihant Cubic</h1>
            <p className="text-xs text-gray-500">Trading & Investment</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="w-8 h-8 rounded-full border-2 border-gray-200"
          />
        </div>
      </div>
    </header>
  );
}