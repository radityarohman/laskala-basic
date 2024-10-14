document.addEventListener("DOMContentLoaded", () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productId = urlParams.get("product"); 

    if (productId !== null) {
        const selectedProduct = products.data.find(
            (product) => product.id == productId
        );

    
        if (selectedProduct) {
            const productDetailDiv = document.getElementById("product-detail");

            const imageLain = selectedProduct.imageLain
                ? selectedProduct.imageLain
                    .map((image, index) => `
                        <img src="${image}" alt="${selectedProduct.namaProduk} image ${index + 1}" class="thumbnail-image" loading="lazy" />
                    `).join("")
                : "";

            const deskripsiProduk = selectedProduct.deskripsiProduk
                .map(desk => `<li>${desk}</li>`)
                .join("");

            productDetailDiv.innerHTML = `
                <div class="product-container">
                    <div class="product-images" data-aos="fade-right" duration="300">
                        <div class="product-main-image">
                            <img src="${selectedProduct.image}" alt="${selectedProduct.namaProduk}" id="mainImage" loading="lazy" />
                        </div>
                        <div class="product-thumbnails">
                            <img src="${selectedProduct.image}" alt="Main Thumbnail" class="thumbnail-image" loading="lazy"/>
                            ${imageLain}
                        </div>
                    </div>

                    <div class="product-description" data-aos="fade-left" duration="300">
                        <div>
                            <h1>${selectedProduct.namaProduk}</h1>
                            <p class="price">${selectedProduct.harga}</p>
                        </div>
                        <h2>Deskripsi Produk</h2>
                        <ul>
                            ${deskripsiProduk}
                        </ul>
                        <div class="social-links">
                            <p>Link pembelian</p>
                            <span></span>
                            <div class="links">
                                <a href="${selectedProduct.linkShopee}">
                                <img src="/assets/icons/shopee.png" alt="shopee" loading="lazy" />
                                </a>
                                <a href="https://instagram.com/laskalabasic/">
                                    <img src="/assets/icons/instagram.png" alt="shopee" loading="lazy" />
                                </a>
                            </div>
                        </div>    
                    </div>
                </div>
            `;

            const thumbnails = document.querySelectorAll(".thumbnail-image");
            thumbnails.forEach((thumbnail) => {
                thumbnail.addEventListener("click", (event) => {
                    const mainImage = document.getElementById("mainImage");
                    mainImage.src = event.target.src;
                });
            });
        } else {
            document.getElementById("product-detail").innerHTML =
                "<p>Produk tidak ditemukan.</p>";
        }
    } else {
        document.getElementById("product-detail").innerHTML =
            "<p>Produk tidak ditemukan.</p>";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const allProducts = products.data; 
    const productId = new URLSearchParams(window.location.search).get("product");

    const otherProducts = allProducts.filter(product => product.id != productId);

    function getRandomProducts(products, count) {
        const shuffled = [...products].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    const randomProducts = getRandomProducts(otherProducts, 4);

    const randomProductsDiv = document.getElementById("random-products");
    randomProducts.forEach(product => {
        randomProductsDiv.innerHTML += `
        <div class="prod-card-sm" data-aos="fade-up">
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
    });
});
