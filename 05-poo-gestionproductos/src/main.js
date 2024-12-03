import { Producto } from "./components/Producto";
import { ProductoDigital } from "./components/ProductoDigital";
import { ProductoFisico } from "./components/ProductoFisico";

const producto = new Producto("Producto", 20, 15);
const producto2 = new ProductoFisico("Físico", 20, 15, {alto: 15, ancho: 10, profundo: 10});
const producto3 = new ProductoDigital("Digital", 20);

producto3.actualizarStock(20);