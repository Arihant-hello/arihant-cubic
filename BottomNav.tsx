import React, { useState } from 'react';
import { Eye, ShoppingCart, ShoppingBag, User } from 'lucide-react';

export default function BottomNav() {
  const [activeTab, setActiveTab] = useState('watchlist');

  const tabs = [
    { id: 'watchlist', icon: Eye, label: 'Watchlist' },
    { id: 'orders', icon: ShoppingCart, label: 'Orders' },
    { id: 'cart', icon: ShoppingBag, label: 'Cart' },
    { id: 'account', icon: User, label: 'Account' },
  ];

  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200">
      <div className="flex justify-around items-center h-16">
        {tabs.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`nav-item ${activeTab === id ? 'active' : ''}`}
          >
            <Icon size={20} />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}