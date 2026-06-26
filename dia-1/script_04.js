const producto = {  nombre: "Notebook",
                    precio: 599000,
                    stock: 12 
                };


const producto2  =  producto;
const productoClone  =  {...producto};

productoClone.nombre="Tester Clone";
console.log("productoClone nombre: ",productoClone.nombre);
console.log("producto nombre: ",producto.nombre);
/*
producto2.nombre="Tester";

console.log("producto2 nombre: ",producto2.nombre);
console.log("producto nombre: ",producto.nombre);
*/


/*

const {nombre, stock} = producto;

console.log(nombre, stock);
console.log(producto.nombre, producto.stock);


const colores = ["rojo", "verde", "azul"];
const [primer, segundo]= colores;

console.log(primer, segundo);
*/