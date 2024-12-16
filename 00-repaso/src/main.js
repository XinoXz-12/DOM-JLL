import { Cart } from "./components/Cart.js";
import { Product } from "./components/Product.js";

const cart = new Cart();
cart.loadLocalStorage();
const products = await cart.fetchProducts();

function pintarCart() {
    const cartUl = document.getElementById("cart");
    if (cart.products.length > 0) {
        cartUl.innerHTML = cart.products.map(
            (product, index) => `<li data-id=${index}>${product.getAllInfo()} 
                                    <button class="btn-delete" data-id=${index}>Eliminar</button>
                                </li>`
        );
    } else {
        cartUl.innerHTML = "<em>El carrito está vacío</em>";
    }
}
function pintarProducts() {
    const productsList = document.getElementById("products-list");
    productsList.innerHTML = products
        .map(
            (product, index) => `<li data-id=${index}>${product.getAllInfo()} 
                                <button class="btn-add" data-id=${index}>Agregar al carrito</button>
                            </li>`
        )
        .join("");
};

function handlerAddToCart(event) {
    if (event.target.classList.contains("btn-add")) {
        const index = Number(event.target.dataset.id);
        cart.addProduct(products[index]);
        pintarCart();
    }
}

function handlerDeleteToCart(event) {
    if (event.target.classList.contains("btn-delete")) {
        const index = Number(event.target.dataset.id);
        cart.deleteProduct(index);
        pintarCart();
    }
}

const generarInterfaz = async () => {
    try {
        const app = document.getElementById("app");
        app.innerHTML = `
            <h1>Gestión de Productos</h1>
            <div class="cart">
                <h3>Carrito</h3>
                <ul id="cart"></ul>
            </div>

            <div class="products-list">
                <h3>Productos</h3>
                <ul id="products-list"></ul>
            </div>
        `;

        pintarCart();
        pintarProducts();

        document
            .getElementById("products-list")
            .addEventListener("click", handlerAddToCart);

        document.getElementById("cart").
            addEventListener("click", handlerDeleteToCart);
    } catch (error) {
        console.log("Error al generar el interfaz", error);
    }
};

// Inicializar aplicación
generarInterfaz();
