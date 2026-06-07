// Sample deals data
const sampleDeals = [
    {
        id: 1,
        title: "Słuchawki SoundMax Pro ANC z aktywną redukcją szumów",
        description: "Profesjonalne słuchawki bezprzewodowe",
        category: "Elektronika",
        priceOld: 549.00,
        priceNew: 349.00,
        store: "MediaExpert",
        temperature: 85,
        comments: 23,
        saved: 156,
        emoji: "🎧",
        rating: 4.5,
        badge: "TOP"
    },
    {
        id: 2,
        title: "Rondo Ruut ST2 - Gravel Bike profesjonalny rower",
        description: "Rower terenowy z osprzętem Shimano",
        category: "Sport",
        priceOld: 10524.57,
        priceNew: 3292.55,
        store: "Bike24",
        temperature: 92,
        comments: 45,
        saved: 234,
        emoji: "🚲",
        rating: 4.8,
        badge: "GORĄCE"
    },
    {
        id: 3,
        title: "Solarna prysznic ogrodowa PARKSIDE 35L",
        description: "Ekologiczny prysznic słoneczny do ogrodu",
        category: "Dom",
        priceOld: 399.00,
        priceNew: 299.00,
        store: "Lidl",
        temperature: 78,
        comments: 12,
        saved: 89,
        emoji: "☀️",
        rating: 4.2,
        badge: "NOWE"
    },
    {
        id: 4,
        title: "Jeansy marki Mustang/Wrangler/LEE do 100 zł",
        description: "Przecena na markowe jeansy",
        category: "Moda",
        priceOld: 250.00,
        priceNew: 100.00,
        store: "Amazon.pl",
        temperature: 88,
        comments: 34,
        saved: 167,
        emoji: "👖",
        rating: 4.1,
        badge: "POPULARNE"
    },
    {
        id: 5,
        title: "Wakacje na Sycylii - lot, hotel, śniadanie 6 dni",
        description: "All-in package na Sycylię z hoteliem 4*",
        category: "Turystyka",
        priceOld: 2499.00,
        priceNew: 799.00,
        store: "eFly.pl",
        temperature: 95,
        comments: 78,
        saved: 412,
        emoji: "🏖️",
        rating: 4.9,
        badge: "OKAZJA"
    },
    {
        id: 6,
        title: "T-shirt camel active 100% bawełna",
        description: "Koszulka męska dostępna w wielu kolorach",
        category: "Moda",
        priceOld: 139.99,
        priceNew: 66.32,
        store: "Amazon.pl",
        temperature: 72,
        comments: 8,
        saved: 45,
        emoji: "👕",
        rating: 4.0,
        badge: ""
    },
    {
        id: 7,
        title: "Smartwatch Xiaomi Band 8 - monitor zdrowia",
        description: "Multifunkcyjny zegarek z ANC i snu",
        category: "Elektronika",
        priceOld: 299.00,
        priceNew: 149.00,
        store: "Xiaomi Store",
        temperature: 81,
        comments: 56,
        saved: 178,
        emoji: "⌚",
        rating: 4.6,
        badge: "HITY"
    },
    {
        id: 8,
        title: "Lampa ledowa RGB z pilotem 16M kolorów",
        description: "Inteligentna lampa stołowa WiFi",
        category: "Dom",
        priceOld: 199.99,
        priceNew: 79.99,
        store: "AliExpress",
        temperature: 64,
        comments: 19,
        saved: 67,
        emoji: "💡",
        rating: 3.8,
        badge: ""
    },
    {
        id: 9,
        title: "Fotel gamingowy z masażem i podgrzewaniem",
        description: "Ergonomiczny fotel z funkcją masażu",
        category: "Dom",
        priceOld: 1599.00,
        priceNew: 599.00,
        store: "Allegro",
        temperature: 86,
        comments: 42,
        saved: 134,
        emoji: "🪑",
        rating: 4.4,
        badge: "TOP"
    },
    {
        id: 10,
        title: "Słuchawki bezprzewodowe Pro Max ANC 40h",
        description: "Słuchawki premium z dźwiękiem Hi-Fi",
        category: "Elektronika",
        priceOld: 799.00,
        priceNew: 349.00,
        store: "Newegg.com",
        temperature: 91,
        comments: 67,
        saved: 289,
        emoji: "🎧",
        rating: 4.7,
        badge: "GORĄCE"
    }
];

// Function to calculate discount percentage
function calculateDiscount(oldPrice, newPrice) {
    return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
}

// Function to create deal card HTML
function createDealCard(deal) {
    const discount = calculateDiscount(deal.priceOld, deal.priceNew);
    const stars = '★'.repeat(Math.floor(deal.rating)) + (deal.rating % 1 ? '✓' : '');
    
    return `
        <div class="deal-card">
            ${deal.badge ? `<div class="deal-badge">${deal.badge}</div>` : ''}
            <div class="deal-image">${deal.emoji}</div>
            <div class="deal-content">
                <div class="deal-title">${deal.title}</div>
                <div class="deal-description">${deal.description}</div>
                <div class="deal-meta">
                    <div class="deal-meta-item">🏪 ${deal.store}</div>
                    <div class="deal-meta-item">💬 ${deal.comments}</div>
                    <div class="deal-meta-item">⭐ ${deal.saved}</div>
                </div>
                <div class="deal-rating">
                    <span class="stars">${stars}</span>
                    <span>${deal.rating}</span>
                </div>
                <div class="deal-category-tag">${deal.category}</div>
            </div>
            <div class="deal-price-section">
                <div class="price-container">
                    <div class="price-old">${deal.priceOld.toFixed(2)} zł</div>
                    <div class="price-new">${deal.priceNew.toFixed(2)} zł</div>
                </div>
                <div class="discount-badge">-${discount}%</div>
                <div class="deal-actions">
                    <button class="btn-action btn-visit">Przejdź do oferty</button>
                    <button class="btn-action btn-comment">Komentuj</button>
                    <button class="btn-action btn-save">♡ Zapisz</button>
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
    document.querySelectorAll('.btn-save').forEach((btn) => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle('saved');
            this.textContent = this.classList.contains('saved') ? '♥ Zapisano' : '♡ Zapisz';
        });
    });
    
    // Add event listeners to comment buttons
    document.querySelectorAll('.btn-comment').forEach((btn, index) => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            alert(`Komentarze do: ${deals[index].title}`);
        });
    });
    
    // Add event listeners to visit buttons
    document.querySelectorAll('.btn-visit').forEach((btn, index) => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            alert(`Przejście do: ${deals[index].store}\n\nCena: ${deals[index].priceNew.toFixed(2)} zł`);
        });
    });
}

// Category filter
function setupCategoryFilter() {
    const categorySelect = document.querySelector('.filter-select');
    
    if (categorySelect) {
        categorySelect.addEventListener('change', (e) => {
            const selectedCategory = e.target.value;
            let filteredDeals = [...sampleDeals];
            
            if (selectedCategory !== 'Kategoria') {
                filteredDeals = filteredDeals.filter(deal => deal.category === selectedCategory);
            }
            
            renderDeals(filteredDeals);
        });
    }
}

// Sort functionality
function setupSorting() {
    const sortSelects = document.querySelectorAll('.filter-select');
    
    if (sortSelects.length > 1) {
        sortSelects[1].addEventListener('change', (e) => {
            const sortOption = e.target.value;
            let sortedDeals = [...sampleDeals];
            
            if (sortOption === 'Najpopularniejsze') {
                sortedDeals.sort((a, b) => b.saved - a.saved);
            } else if (sortOption === 'Największa zniżka') {
                sortedDeals.sort((a, b) => {
                    const discountA = calculateDiscount(a.priceOld, a.priceNew);
                    const discountB = calculateDiscount(b.priceOld, b.priceNew);
                    return discountB - discountA;
                });
            } else if (sortOption === 'Najnowsze') {
                // Default order
            }
            
            renderDeals(sortedDeals);
        });
    }
}

// Add deal button
function setupAddDealButton() {
    const addBtn = document.querySelector('.btn-primary');
    if (addBtn) {
        addBtn.addEventListener('click', () => {
            alert('Funkcja dodawania okazji - wkrótce dostępna!\n\nAby dodać okazję, zaloguj się lub utwórz konto.');
        });
    }
}

// Search functionality
function setupSearch() {
    const searchInput = document.querySelector('.search-input');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            
            if (searchTerm.length === 0) {
                renderDeals(sampleDeals);
                return;
            }
            
            const filteredDeals = sampleDeals.filter(deal =>
                deal.title.toLowerCase().includes(searchTerm) ||
                deal.description.toLowerCase().includes(searchTerm) ||
                deal.store.toLowerCase().includes(searchTerm) ||
                deal.category.toLowerCase().includes(searchTerm)
            );
            
            renderDeals(filteredDeals);
        });
    }
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    renderDeals();
    setupCategoryFilter();
    setupSorting();
    setupAddDealButton();
    setupSearch();
});
