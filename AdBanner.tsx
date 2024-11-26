import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function AdBanner() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-lg font-bold">Start Trading Now!</h2>
          <p className="text-sm opacity-90 mt-1">
            Open a free demat account and start your investment journey
          </p>
        </div>
        <button className="btn-primary">
          Get Started
          <ExternalLink size={16} />
        </button>
      </div>
    </div>
  );
}