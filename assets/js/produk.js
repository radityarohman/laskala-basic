function displayProducts(filter) {
    const bigProductList = document.getElementById("big-product-list");
    const smallProductList = document.getElementById("small-product-list");
    let = bigCardCount = 0;

    bigProductList.innerHTML = ""; 
    smallProductList.innerHTML = "";

    let filteredProducts = products.data;

    if (filter !== "Semua") {
        filteredProducts = products.data.filter(product => product.kategori === filter);
    }

    filteredProducts.forEach((product) => {
        let productCardBig = `
            <div class="prod-card-big" data-aos="fade-up" data-aos-duration="400">
                <a href="detail-produk.html?product=${product.id}">
                    <img
                        src="${product.image}"
                        alt="${product.namaProduk}"
                        class="prod-card-img"
                        loading="lazy"
                    />
                    <div class="prod-card-text">
                        <p>${product.namaProduk}</p>
                        <p>${product.harga}</p>
                    </div>
                </a>
            </div>
        `;
    
        let productCardSmall = `
            <div class="prod-card-sm" data-aos="fade-up" data-aos-duration="550">
                <a href="detail-produk.html?product=${product.id}">
                    <img
                        src="${product.image}"
                        alt="${product.namaProduk}"
                        class="prod-card-img"
                        loading="lazy"
                    />
                    <div class="prod-card-text">
                        <p>${product.namaProduk}</p>
                        <p>${product.harga}</p>
                    </div>
                </a>
            </div>
        `;
    
        if (bigCardCount < 2) {
            bigProductList.innerHTML += productCardBig;
            bigCardCount++;
        } else {
            smallProductList.innerHTML += productCardSmall;
        }
    });
    
}

function setActiveFilter(filter) {
    document.querySelectorAll(".filter").forEach(link => {
        link.classList.remove("active-filter");
        if (link.textContent === filter) {
            link.classList.add("active-filter");
        }
    });
}

function showProductDetail(productName) {
    const product = products.data.find(p => p.namaProduk === productName);
    if (product) {
        localStorage.setItem('selectedProduct', JSON.stringify(product));
        window.location.href = '/pages/detail-produk.html';
    }
}

document.querySelectorAll(".filter").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const filter = e.target.textContent;
        localStorage.setItem("selectedCategory", filter); 
        setActiveFilter(filter);
        displayProducts(filter);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const savedCategory = localStorage.getItem("selectedCategory") || "Semua"; // 
    setActiveFilter(savedCategory);
    displayProducts(savedCategory);
});
