const nombre = { nombre: "Philip", apellido: "Fry" };
const trabajo = { empresa: "Planet Express", cargo: "Delivery Boy" };

const persona= Object.assign(nombre,trabajo);
const persona2= {...nombre,...trabajo};
const persona3= {...nombre,...trabajo, cargo:"Capitán"};

console.log(persona);
console.log(persona2);
console.log(persona3);
