const trabajo = {
  cargo: "Programador",
  tipo: "Por hora",
  detalles() {
    return `Cargo: ${this.cargo}, contrato: ${this.tipo}.`;
  },
};

const arquitecto= Object.create(trabajo);


arquitecto.cargo = "Arquitecto";
arquitecto.tipo = "Por Mes";
console.log(arquitecto.cargo);
/*
console.log(arquitecto.detalles());
*/
console.log(arquitecto.detalles());