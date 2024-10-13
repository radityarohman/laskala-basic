let products = {
    data: [
        {
            namaProduk: "Crewneck Casual Pria Arthur Grey",
            kategori: "Crewneck",
            harga: "Rp. 345.000",
            image: "/assets/images/products/crewneck/arthur-grey-1.webp"
        },
        {
            namaProduk: "Crewneck Casual Pria Rio Black",
            kategori: "Crewneck",
            harga: "Rp. 330.000",
            image: "/assets/images/products/crewneck/rio-black-1.webp"
        },
        {
            namaProduk: "Crewneck Casual Pria Roma",
            kategori: "Crewneck",
            harga: "Rp. 347.000",
            image: "/assets/images/products/crewneck/roma-1.webp"
        },
        {
            namaProduk: "Crewneck Casual Pria Rote Navy",
            kategori: "Crewneck",
            harga: "Rp. 330.000",
            image: "/assets/images/products/crewneck/rote-navy-1.webp"
        },
        {
            namaProduk: "Bruno Hoodie",
            kategori: "Hoodie",
            harga: "Rp. 345.000",
            image: "/assets/images/products/hoodie/bruno-hoodie-1.webp"
        },
        {
            namaProduk: "Basic Hoodie Dafa",
            kategori: "Hoodie",
            harga: "Rp. 375.000",
            image: "/assets/images/products/hoodie/basic-dafa-1.webp"
        },
        {
            namaProduk: "Hoodie Casual Pria Deon Navy",
            kategori: "Hoodie",
            harga: "Rp. 345.000",
            image: "/assets/images/products/hoodie/deon-navy-1.webp"
        },
        {
            namaProduk: "Hoodie Casual Pria Jaden Green",
            kategori: "Hoodie",
            harga: "Rp. 345.000",
            image: "/assets/images/products/hoodie/jaden-green-1.webp"
        },
        {
            namaProduk: "Hoodie Casual Pria Aka Maroon",
            kategori: "Hoodie",
            harga: "Rp. 345.000",
            image: "/assets/images/products/hoodie/maroon-hoodie-1.webp"
        },
        {
            namaProduk: "Jaket Aro",
            kategori: "Jaket",
            harga: "Rp. 320.000",
            image: "/assets/images/products/jaket/aro-jaket-1.webp"
        },
        {
            namaProduk: "Jaket Taksa",
            kategori: "Jaket",
            harga: "Rp. 295.000",
            image: "/assets/images/products/jaket/jaket-taksa-1.webp"
        },
        {
            namaProduk: "Jaket Coach Pria Nanda Maroon",
            kategori: "Jaket",
            harga: "Rp. 320.000",
            image: "/assets/images/products/jaket/nanda-maroon-1.webp"
        },
        {
            namaProduk: "Nero Jaket Waterproof",
            kategori: "Jaket",
            harga: "Rp. 325.000",
            image: "/assets/images/products/jaket/nero-jaket-1.webp"
        },
        {
            namaProduk: "Jaket Coach Pria Valo Black",
            kategori: "Jaket",
            harga: "Rp. 320.000",
            image: "/assets/images/products/jaket/valo-black-1.webp"
        },
        {
            namaProduk: "Outer Kimono Pria Shuji Sea Salt",
            kategori: "Kimono",
            harga: "Rp. 323.000",
            image: "/assets/images/products/kimono/shuji-sea-1.webp"
        },
        {
            namaProduk: "Outer Kimono Pria Yuji Navy",
            kategori: "Kimono",
            harga: "Rp. 320.000",
            image: "/assets/images/products/kimono/yuji-navy-1.webp"
        },
        {
            namaProduk: "Baseball Shirt Pria Alan Black",
            kategori: "Shirt",
            harga: "Rp. 323.000",
            image: "/assets/images/products/shirt/baseball-shirt-1.webp"
        },
        {
            namaProduk: "Bowling Shirt Pria Alan Black",
            kategori: "Shirt",
            harga: "Rp. 326.000",
            image: "/assets/images/products/shirt/bowling-shirt-1.webp"
        },
        {
            namaProduk: "Jumper Shirt Pria Nofel Black",
            kategori: "Shirt",
            harga: "Rp. 370.000",
            image: "/assets/images/products/shirt/jumper-shirt-1.webp"
        },
        {
            namaProduk: "Kemeja Lengan Pendek Nix",
            kategori: "Shirt",
            harga: "Rp. 320.000",
            image: "/assets/images/products/shirt/kemeja-lengan-pendek-nix-1.webp"
        },
        {
            namaProduk: "Kemeja Lengan Pendek Zada",
            kategori: "Shirt",
            harga: "Rp. 347.000",
            image: "/assets/images/products/shirt/kemeja-lengan-pendek-zada-1.webp"
        },
        {
            namaProduk: "Kemeja Lengan Pendek Otto",
            kategori: "Shirt",
            harga: "Rp. 347.000",
            image: "/assets/images/products/shirt/kemeja-lengan-pendek-otto-1.webp"
        },
        {
            namaProduk: "Kemeja Lengan Panjang Kandra",
            kategori: "Shirt",
            harga: "Rp. 320.000",
            image: "/assets/images/products/shirt/kemeja-panjang1.webp"
        },
        {
            namaProduk: "Basic Jumper Shirt Pria Kora Grey",
            kategori: "Shirt",
            harga: "Rp. 320.000",
            image: "/assets/images/products/shirt/laskala-basic-jumper-grey1.webp"
        },
    ]
};

function displayProducts(filter) {
    const bigProductList = document.getElementById("big-product-list");
    const smallProductList = document.getElementById("small-product-list");

    bigProductList.innerHTML = ""; 
    smallProductList.innerHTML = "";

    let filteredProducts = products.data;

    
    if (filter !== "Semua") {
        filteredProducts = products.data.filter(product => product.kategori === filter);
    }

    filteredProducts.forEach((product, index) => {
        
        let productCardBig = `
            <div class="prod-card-big" data-aos="fade-up" data-aos-duration="400">
                <a href="#">
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
                <a href="#">
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

    
        if (index < 2) {
            bigProductList.innerHTML += productCardBig; 
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
