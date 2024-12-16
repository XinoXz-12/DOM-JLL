import { Product } from "./Product";
const urlBase = import.meta.env.VITE_URL_BASE;
const port = import.meta.env.VITE_PORT;

const productsUrl = `${urlBase}:${port}/products`;
/**
 * @description Constructor de un carrito de productos
 */
export function Cart() {
    this.products = [];
}

Cart.prototype.addProduct = function (product) {
    this.products.push(product);
    this.saveLocalStorage();
};

Cart.prototype.deleteProduct = function (index) {
    this.products.splice(index, 1);
    this.saveLocalStorage();
};

Cart.prototype.saveLocalStorage = function () {
    localStorage.setItem("cart", JSON.stringify(this.products));
};

Cart.prototype.loadLocalStorage = function () {
    if (localStorage.hasOwnProperty("cart")) {
        const arrayJson = JSON.parse(localStorage.getItem("cart"));
        this.products = arrayJson.map(
            ({ id, title, description, category, price, rating, stock, brand, sku, width, images }) =>
                new Product(id, title, description, category, price, rating, stock, brand, sku, width, images)
        );
    }
};

Cart.prototype.fetchProducts = async() => {
        const response = await fetch(productsUrl);
        if (!response.ok) {
            throw new Error(`Error fetching products: ${response.status}`);
        }
        const data = await response.json();
    
        return data.map(
            ({
                id,
                title,
                description,
                category,
                price,
                rating,
                stock,
                brand,
                sku,
                width,
                images,
            }) =>
                new Product(
                    id,
                    title,
                    description,
                    category,
                    price,
                    rating,
                    stock,
                    brand,
                    sku,
                    width,
                    images
                )
        );
}