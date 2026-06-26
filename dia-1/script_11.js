/*** chaining ***/
const cliente = {
  nombre: "Eva",
  direccion: { calle: "Av. Siempre Viva", numero: 742 },
};
const clienteSinDir = { nombre: "Beto" };

// ?.
console.log(cliente.direccion.calle);
console.log(clienteSinDir.direccion?.calle);
console.log(clienteSinDir.direccion?.calle || "Sin dirección");


/***SHORTHAND ***/
const nombre = "Lúa";
const edad = 5;

const mascota = {nombre, edad} ; // en vez de { nombre: nombre, edad: edad }
console.log(mascota);
