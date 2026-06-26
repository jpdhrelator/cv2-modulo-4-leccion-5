const usuario = { 
    nombre: "Ana",
    edad: 30,
    ciudad: "Santiago"
};

const { nombre, edad } = usuario;
console.log(nombre, "tiene", edad, "años");

const {ciudad, pais="Chile"} = usuario;
console.log(ciudad + ", " + pais);


const saludar = ({nombre})=> `Hola ${nombre}`;
console.log(saludar(usuario));
