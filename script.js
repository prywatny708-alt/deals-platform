// Sample deals data
const sampleDeals = [
    {
        id: 1,
        title: "NEW BALANCE BB80 Sneakers",
        description: "Oryginalne buty sportowe z certyfikatem autentyczności",
        category: "Moda",
        priceOld: 310,
        priceNew: 138.90,
        store: "JD Sports",
        temperature: 85,
        comments: 23,
        saved: 156,
        emoji: "👟",
        timestamp: "2 godziny temu",
        link: "#"
    },
    {
        id: 2,
        title: "Rondo Ruut ST2 - Gravel Bike",
        description: "Profesjonalny rower terenowy z osprzętem Shimano",
        category: "Sport i Turystyka",
        priceOld: 10524.57,
        priceNew: 3292.55,
        store: "Bike24",
        temperature: 92,
        comments: 45,
        saved: 234,
        emoji: "🚲",
        timestamp: "4 godziny temu",
        link: "#"
    },
    {
        id: 3,
        title: "Solarna prysznic PARKSIDE 35L",
        description: "Ekologiczny prysznic słoneczny do użytku domowego",
        category: "Dom i Ogród",
        priceOld: 399,
        priceNew: 299,
        store: "Lidl",
        temperature: 78,
        comments: 12,
        saved: 89,
        emoji: "☀️",
        timestamp: "6 godzin temu",
        link: "#"
    },
    {
        id: 4,
        title: "Jeansy marki Mustang/Wrangler/LEE",
        description: "Przecena do 100 zł na najlepsze markowe jeansy",
        category: "Moda",
        priceOld: 250,
        priceNew: 100,
        store: "Amazon.pl",
        temperature: 88,
        comments: 34,
        saved: 167,
        emoji: "👖",
        timestamp: "8 godzin temu",
        link: "#"
    },
    {
        id: 5,
        title: "Wakacje na Sycylii - 6 dni",
        description: "Lot + noclegi ze śniadaniem w 4-gwiazdkowym hotelu",
        category: "Sport i Turystyka",
        priceOld: 2499,
        priceNew: 799,
        store: "eFly.pl",
        temperature: 95,
        comments: 78,
        saved: 412,
        emoji: "🏖️",
        timestamp: "10 godzin temu",
        link: "#"
    },
    {
        id: 6,
        title: "T-shirt camel active",
        description: "Koszulka męska 100% bawełna - różne kolory dostępne",
        category: "Moda",
        priceOld: 139.99,
        priceNew: 66.32,
        store: "Amazon.pl",
        temperature: 72,
        comments: 8,
        saved: 45,
        emoji: "👕",
        timestamp: "12 godzin temu",
        link: "#"
    },
    {
        id: 7,
        title: "Smartwatch Xiaomi Band 8",
        description: "Wielofunkcyjny zegarek z monitorem zdrowia i snu",
        category: "Elektronika",
        priceOld: 299,
        priceNew: 149,
        store: "Xiaomi Store",
        temperature: 81,
        comments: 56,
        saved: 178,
        emoji: "⌚",
        timestamp: "14 godzin temu",
        link: "#"
    },
    {
        id: 8,
        title: "Lampa ledowa RGB z pilotem",
        description: "Inteligentna lampa stołowa z 16 milionami kolorów",
        category: "Dom i Ogród",
        priceOld: 199.99,
        priceNew: 79.99,
        store: "AliExpress",
        temperature: 64,
        comments: 19,
        saved: 67,
        emoji: "💡",
        timestamp: "16 godzin temu",
        link: "#"
    },
    {
        id: 9,
        title: "Fotel gamingowy z masażem",
        description: "Ergonomiczny fotel z funkcją masażu i podgrzewaniem",
        category: "Dom i Ogród",
        priceOld: 1599,
        priceNew: 599,
        store: "Allegro",
        temperature: 86,
        comments: 42,
        saved: 134,
        emoji: "🪑",
        timestamp: "18 godzin temu",
        link: "#"
    },
    {
        id: 10,
        title: "Słuchawki bezprzewodowe Pro Max",
        description: "Słuchawki z ANC, 40h baterii, dźwięk Hi-Fi",
        category: "Elektronika",
        priceOld: 799,
        priceNew: 349,
        store: "Newegg.com",
        temperature: 91,
        comments: 67,
        saved: 289,
        emoji: "🎧",
        timestamp: "20 godzin temu",
        link: "#"
    }
];

// Function to calculate discount percentage
function calculateDiscount(oldPrice, newPrice) {
    return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
}

// Function to get temperature color and label
function getTemperatureClass(temp) {
    if (temp >= 80) return 'hot';
    if (temp >= 60) return 'warm';
    return 'cold';
}

// Function to create deal card HTML
function createDealCard(deal) {
    const discount = calculateDiscount(deal.priceOld, deal.priceNew);
    const tempClass = getTemperatureClass(deal.temperature);
    
    return `
        <div class="deal-card" data-category="${deal.category}">
            <div class="deal-image">${deal.emoji}</div>
            <div class="deal-content">
                <h3>${deal.title}</h3>
                <p class="deal-description">${deal.description}</p>
                <div class="deal-meta">
                    <span>${deal.store}</span>
                    <span>${deal.timestamp}</span>
                </div>
                <span class="deal-category">${deal.category}</span>
                <div class="deal-stats">
                    <div class="deal-stat">
                        <span>💬</span>
                        <span>${deal.comments}</span>
                    </div>
                    <div class="deal-stat">
                        <span>⭐</span>
                        <span>${deal.saved}</span>
                    </div>
                </div>
            </div>
            <div class="deal-price-section">
                <div class="price-old">${deal.priceOld.toFixed(2)} zł</div>
                <div class="price-new">${deal.priceNew.toFixed(2)} zł</div>
                <div class="discount">-${discount}%</div>
                <div class="deal-actions">
                    <a href="${deal.link}" class="btn-small btn-visit">Przejdź</a>
                    <button class="btn-small btn-comment">Komentarz</button>
                    <button class="btn-small btn-save">♡</button>
                </div>
                <div class="temperature ${tempClass}" style="margin-top: 10px;">
                    🔥 ${deal.temperature}°
                </div>
            </div>
        </div>
    `;
}

// Function to render deals list
function renderDeals(deals = sampleDeals) {
    const dealsList = document.getElementById('dealsList');
    dealsList.innerHTML = deals.map(deal => createDealCard(deal)).join('');
    
    // Add event listeners to save buttons
    document.querySelectorAll('.btn-save').forEach((btn, index) => {
        btn.addEventListener('click', () => {
            btn.style.color = btn.style.color === 'rgb(243, 156, 18)' ? '#999' : 'var(--warning-color)';
            btn.textContent = btn.style.color === 'rgb(243, 156, 18)' ? '♡' : '♥';
        });
    });
    
    // Add event listeners to comment buttons
    document.querySelectorAll('.btn-comment').forEach((btn, index) => {
        btn.addEventListener('click', () => {
            alert(`Komentarze do okazji: ${deals[index].title}`);
        });
    });
    
    // Add event listeners to visit buttons
    document.querySelectorAll('.btn-visit').forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            alert(`Przejście do: ${deals[index].store}`);
        });
    });
}

// Filter functionality
function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            let filteredDeals = [...sampleDeals];
            
            // Apply filter logic
            if (filter === 'hot') {
                filteredDeals = filteredDeals.filter(deal => deal.temperature >= 80);
                filteredDeals.sort((a, b) => b.temperature - a.temperature);
            } else if (filter === 'popular') {
                filteredDeals.sort((a, b) => b.saved - a.saved);
            } else if (filter === 'newest') {
                // Already sorted by newest
            }
            
            renderDeals(filteredDeals);
        });
    });
}

// Category filter
function setupCategoryFilter() {
    const categorySelect = document.querySelector('.filter-select');
    
    categorySelect.addEventListener('change', (e) => {
        const selectedCategory = e.target.value;
        let filteredDeals = [...sampleDeals];
        
        if (selectedCategory !== 'Wszystkie kategorie') {
            filteredDeals = filteredDeals.filter(deal => deal.category === selectedCategory);
        }
        
        renderDeals(filteredDeals);
    });
}

// Sort functionality
function setupSorting() {
    const sortSelect = document.querySelectorAll('.filter-select')[1];
    
    sortSelect.addEventListener('change', (e) => {
        const sortOption = e.target.value;
        let sortedDeals = [...sampleDeals];
        
        if (sortOption.includes('Najpopularniejsze')) {
            sortedDeals.sort((a, b) => b.saved - a.saved);
        } else if (sortOption.includes('Najgorętsze')) {
            sortedDeals.sort((a, b) => b.temperature - a.temperature);
        } else if (sortOption.includes('Największa zniżka')) {
            sortedDeals.sort((a, b) => {
                const discountA = calculateDiscount(a.priceOld, a.priceNew);
                const discountB = calculateDiscount(b.priceOld, b.priceNew);
                return discountB - discountA;
            });
        }
        
        renderDeals(sortedDeals);
    });
}

// Modal functionality
function setupModal() {
    const modal = document.getElementById('addDealModal');
    const addBtn = document.querySelector('.btn-add-deal');
    const closeBtn = document.querySelector('.close');
    const form = document.getElementById('addDealForm');
    
    addBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Dziękujemy za dodanie okazji! (demo mode)');
        modal.style.display = 'none';
        form.reset();
    });
}

// Search functionality
function setupSearch() {
    const searchBar = document.querySelector('.search-bar');
    
    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredDeals = sampleDeals.filter(deal =>
            deal.title.toLowerCase().includes(searchTerm) ||
            deal.description.toLowerCase().includes(searchTerm) ||
            deal.store.toLowerCase().includes(searchTerm)
        );
        
        renderDeals(filteredDeals);
    });
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    renderDeals();
    setupFilters();
    setupCategoryFilter();
    setupSorting();
    setupModal();
    setupSearch();
});