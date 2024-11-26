import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const stocks = [
  { symbol: 'RELIANCE', name: 'Reliance Industries', change: 1.2 },
  { symbol: 'TCS', name: 'Tata Consultancy Services', change: -0.8 },
  { symbol: 'HDFC', name: 'HDFC Bank Limited', change: 2.1 },
  { symbol: 'INFY', name: 'Infosys Limited', change: -1.5 },
  { symbol: 'ITC', name: 'ITC Limited', change: 0.5 },
  { symbol: 'BHARTIARTL', name: 'Bharti Airtel', change: 1.8 },
  { symbol: 'HCLTECH', name: 'HCL Technologies', change: -0.3 },
  { symbol: 'WIPRO', name: 'Wipro Limited', change: 0.9 },
];

export default function StockList({ searchQuery }: { searchQuery: string }) {
  const filteredStocks = stocks.filter(
    stock =>
      stock.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stock.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="px-4">
      {filteredStocks.map((stock) => (
        <div key={stock.symbol} className="stock-card">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-gray-900">{stock.symbol}</h3>
              <p className="text-sm text-gray-500">{stock.name}</p>
            </div>
            <div className={stock.change >= 0 ? 'stock-change-positive' : 'stock-change-negative'}>
              {stock.change >= 0 ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              {Math.abs(stock.change)}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}