const trabajo={
    cargo:"Programador",
    tipo:"X Hora",
    jornada:"Lunes a Viernes",


    detalles(){
        return `El Cargo de ${this.cargo} se trabaja ${this.tipo}, de ${this.jornada}`
    },

    //detalles2: () =>`El Cargo de ${this.cargo} se trabaja ${this.tipo}, de ${this.jornada}`
}

console.log(trabajo.detalles());

trabajo.cargo="Chofer";
console.log(trabajo.detalles());

