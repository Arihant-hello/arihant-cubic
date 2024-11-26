// Stock data
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

// DOM Elements
const searchInput = document.getElementById('searchInput');
const stockList = document.getElementById('stockList');

// Render stock list
function renderStocks(filteredStocks = stocks) {
    stockList.innerHTML = filteredStocks.map(stock => `
        <div class="stock-card">
            <div class="flex justify-between items-start">
                <div>
                    <h3 class="font-semibold text-gray-900">${stock.symbol}</h3>
                    <p class="text-sm text-gray-500">${stock.name}</p>
                </div>
                <div class="${stock.change >= 0 ? 'stock-change-positive' : 'stock-change-negative'}">
                    ${stock.change >= 0 ? 
                        '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>' :
                        '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>'
                    }
                    ${Math.abs(stock.change)}%
                </div>
            </div>
        </div>
    `).join('');
}

// Search functionality
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filteredStocks = stocks.filter(stock => 
        stock.symbol.toLowerCase().includes(query) ||
        stock.name.toLowerCase().includes(query)
    );
    renderStocks(filteredStocks);
});

// Bottom navigation functionality
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
    });
});

// Initial render
renderStocks();