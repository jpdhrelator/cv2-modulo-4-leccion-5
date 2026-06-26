/** freeze ***/
let config= {version:"1.0", debug:true};
Object.freeze(config)
config.debug = false;
config.version = "1.1";
//console.log("config",config);

let configFreez= Object.freeze({ name:"Tester", year:2026});
configFreez.year=2027;
//console.log(configFreez);
//console.log("configFreez",configFreez);

/** seal ***/
const usuario = { nombre: "Ana", activo: true };
Object.seal(usuario);
usuario.rol="Admin";
usuario.activo= false;
console.log(usuario);

console.log("¿congelado?",Object.isFrozen(config));
console.log("¿congelado?",Object.isFrozen(usuario));

console.log("¿sellado?",Object.isSealed(usuario));


const vehiculo= {modelo:"Yaris",marca:"Toyota"};
Object.seal(vehiculo);
Object.freeze(vehiculo)


console.log(vehiculo);
vehiculo.esNuevo=true;
vehiculo.marca="Fiat";
console.log(vehiculo);
console.log("¿congelado?",Object.isFrozen(vehiculo));
console.log("¿sellado?",Object.isSealed(vehiculo));

