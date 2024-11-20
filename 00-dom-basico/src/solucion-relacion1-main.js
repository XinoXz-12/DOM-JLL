// ------------ INICIO DE LA APLICACIÓN ------------
document.addEventListener("DOMContentLoaded", () => {
  // 1.- Selecciona el elemento `h1` por su ID.
  const elementDiv = document.getElementById("contenedorPrincipal");
  const elementH1 = elementDiv.querySelector("h1");
  console.log(elementH1);
  console.log(elementH1.textContent);
  const elementH1v2 = document
    .getElementById("contenedorPrincipal")
    .querySelector("h1");
  console.log(elementH1v2);

  // 2.- Selecciona todos los párrafos con la clase "parrafo" dentro del `contenedorSecundario`.
  const parrafosDiv = document.querySelectorAll(
    "#contenedorPrincipal .parrafo"
  );
  console.log(parrafosDiv);

  // 3.- Selecciona el elemento `img` por su atributo `src`.
  const elementImg = document.querySelector('img[src="imagen.png"]');
  console.log(elementImg);

  // 4.- Selecciona todos los elementos `<span>` dentro del `contenedorSecundario`.
  const spanDivSecundario = document.querySelectorAll(
    "#contenedorSecundario span"
  );
  console.log(spanDivSecundario);

  // 5.- Selecciona el primer párrafo con la clase "importante".
  const primerImportante = document.querySelector(".parrafo.importante");
  console.log(primerImportante);

  // 6.- Selecciona todos los párrafos que están dentro de un elemento con el `id` "contenedorPrincipal".
  const parrafosPrincipal = document.querySelectorAll("#contenedorPrincipal p");
  console.log(parrafosDiv);

  // 7.- Selecciona todos los elementos que tienen el atributo `data-atributo` con valor "valor1".
  const atributoValor = document.querySelectorAll('[data-atributo="valor1"]');
  console.log(atributoValor);

  // 8.- Selecciona el segundo párrafo que está dentro de un elemento con la clase "importante".
  const parrafosImportantes = document.querySelectorAll(".parrafo.importante");
  parrafosImportantes.length > 1 ? console.log(parrafosImportantes[1]) : null;

  // 9.- Selecciona todos los elementos `<span>` que están dentro de cualquier elemento con la clase "contenedor".
  const spanContenedor = document.querySelectorAll(
    "#contenedorSecundario span"
  );
  console.log(spanContenedor);

  // 10.- Selecciona el tercer párrafo dentro del `contenedorPrincipal` que tiene la clase "parrafo".
  const parrafosPrincipal2 = document.querySelectorAll("#contenedorPrincipal");
  parrafosPrincipal2.length > 2 ? console.log(parrafosPrincipal2[2]) : null;
});
