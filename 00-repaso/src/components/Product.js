/**
 * @description Clase producto
 * @param {Number} id
 * @param {string} title
 * @param {string} description
 * @param {string} category
 * @param {Number} price
 * @param {Number} rating
 * @param {Number} stock
 * @param {string} brand
 * @param {string} sku
 * @param {Number} width
 * @param {Array} images
 */
export class Product {
    // propiedades

    // constructores
    constructor(id, title, description, category, price, rating, stock, brand, sku, width, images) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
        this.rating = rating;
        this.stock = stock;
        this.brand = brand;
        this.sku = sku;
        this.width = width;
        this.images = images;
    }
    // metodos
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getDescription() {
        return this.description;
    }
    getCategory() {
        return this.category;
    }
    getPrice() {
        return this.price;
    }
    getRating() {
        return this.rating;
    }
    getStock() {
        return this.stock;
    }
    getBrand() {
        return this.brand;
    }
    getSKU() {
        return this.sku;
    }
    getWidth() {
        return this.width;
    }
    getImages() {
        return this.images;
    }

    getAllInfo() {
        if (this.getImages().length == 1) {
            return `Producto: ${this.getTitle()} - Categoría: ${this.getCategory()} - Precio: ${this.getPrice()} - Stock: ${this.getStock()} - Marca: ${this.getBrand()} - SKU: ${this.getSKU()} - Ancho: ${this.getWidth()} - Imágenes: <img src="${this.getImages().join(
                ""
            )}" width=50px>`;
        } else {
            return `Producto: ${this.getTitle()} - Categoría: ${this.getCategory()} - Precio: ${this.getPrice()} - Stock: ${this.getStock()} - Marca: ${this.getBrand()} - SKU: ${this.getSKU()} - Ancho: ${this.getWidth()} - Imágenes: ${this.getImages().map((url) => `<img src="${url}")}" width=50px>`).join('')}`;
        }
    }

    getProductById(id) {
        if (this.id === id) {
            return this;
        }
    }
}
