
const pizzeriaApp={
    nombre:"Don Pizza",
    menu:[
        { nombre:"Muzzarella", precio:6000, tamanio:["P","M","F"] },
        { nombre:"Napolitana", precio:7500, tamanio:["F","XG"] },
        { nombre:"Pepperoni", precio:8000, tamanio:["M","F","XG"] },
    ],
    pedidos:[],

    buscarPizza(nombre){
       return this.menu.find((p)=> p.nombre.toLowerCase() === nombre.toLowerCase() );
    },
    agregarPizza(nombre,precio,tam){

        if(this.buscarPizza(nombre)) return `Erro: La pizza ${nombre} existe`;
        const nuevaPizza={ 
            nombre: capitalizarTexto(nombre), 
            precio,
            tamanio:tam
        };
        this.menu.push(nuevaPizza);

        return "Creada exitosamente";
    },
    calcularTotal(nombrePizza,tam,cantidad){
       const factor =  factorTamanio[tam.toLowerCase()] || 0 ;

       const { precio } = this.buscarPizza(nombrePizza) || { precio:0 }

       let precioNeto = precio +(factor * precio);

       precioNeto = (cantidad > 3)? precioNeto-(precioNeto*0.10) : precioNeto;

    //    if(cantidad > 3){
    //     console.log("sin dcto:",precioNeto,"con dcto:",precioNeto-(precioNeto*0.10));
        
    //    }
       return Math.ceil(aplicaIva(precioNeto)) * cantidad
    },
    tomarPedido(cliente,nombrePizza,tamanio,cantidad){
        if(!cliente) return '❌ El cliente es obligatorio';
        
        const pizza= this.buscarPizza(nombrePizza);
        
        if(!pizza) return '❌ No existe esa pizza';
        if(!pizza.tamanio.includes(tamanio.toUpperCase())) return '❌ EL tamaño No disponible';
        if (cantidad< 1) return "❌ Cantidad inválida";

        const pedido={
            cliente,
            nombrePizza: pizza.nombre,
            tamanio: tamanio.toUpperCase(),
            cantidad,
            total: this.calcularTotal(pizza.nombre,tamanio,cantidad),
            entregado: false
        }

        this.pedidos.push(pedido);

        
        return `✅ Pedido de ${cliente}: ${cantidad}x ${pizza.nombre} ${tamanio.toUpperCase()} = ${formatearPesos(pedido.total)}`
    },
    verMenu(){

        let menu="";
        this.menu.forEach(({nombre, precio,tamanio},i)=>{
         
            let precioTam=""
            tamanio.forEach((tam)=>{
                const factor =  factorTamanio[tam.toLowerCase()] || 0 ;
                let precioFinal = Math.ceil(aplicaIva(precio +(factor * precio)));
 
                precioTam+= `
                    ${tam}- ${formatearPesos(precioFinal)}
                `;
                
            });


            menu+=`  
            ${i + 1}. ${nombre} - ${precioTam}`;
        });

        return menu;
    },

    verPedidos(){
        if(this.pedidos.length === 0) return "No hay pedidos aún";

        let msj="";

        this.pedidos.forEach(({cliente,cantidad,nombrePizza,total,entregado,tamanio},i)=>{
            const estado= (entregado)? "✅ entregado" : "⏳ pendiente";

            msj+=`  
            ${i + 1}. ${cliente}: ${cantidad} X ${nombrePizza} ${tamanio} (${formatearPesos(total)}) ${estado}`;
        });

        return msj;

    },
    existePedido(nro){
       /*
        if(!this.pedidos[nro-1]) return false;

        return true;
        */
        return (this.pedidos[nro-1])? true : false
    },
    cancelarPedido(nro){
        if(!this.existePedido(nro)) return "❌ No existe ese pedido";
        const {cliente} = this.pedidos[nro-1];
        this.pedidos.splice(nro-1,1);
        return `🗑️ Pedido de ${cliente} cancelado`;
    },
    marcarEntregado(nro){
        if(!this.existePedido(nro)) return "❌ No existe ese pedido";
        const pedido = this.pedidos[nro-1];
        pedido.entregado= true;

        return `🛵 Pedido de ${pedido.cliente} entregado`
    },
    reporte(){

        const pendientes= this.pedidos.filter(({entregado})=> !entregado );
        const totalVendido= this.pedidos.reduce((acc,{total})=> acc+total,0);
        return `
            == Reporte del día ==
            Pedidos totales: ${this.pedidos.length}
            Pendientes: ${pendientes.length}
            Total vendido: ${formatearPesos(totalVendido)}
        `
    },
    pizzaMasVendida(){
        if(this.pedidos.length===0) return "Aún no hay pedidos";

        const ranking= {};
        this.pedidos.forEach(({nombrePizza,cantidad})=>{
            ranking[nombrePizza]= (ranking[nombrePizza] || 0)+cantidad;
            /* ranking.Napolitana = (ranking.Napolitana || 0)+ cantidad
                {
                    Muzzarella:1,
                    Napolitana:1
                }  
              
            */
        });

        let masVendida = ""
        let maxCant = 0;
        Object.entries(ranking).forEach(([nombrePizza, cant])=>{
            //console.log(nombrePizza,cant);
            if(cant > maxCant){
                maxCant=cant;
                masVendida=nombrePizza;
            }
        });

        return `${masVendida} (${maxCant} vendidas)`

    }

}


const run= ()=>{

    let opcion;

    do {
        opcion= prompt(`
            1) ver menú
            2) Tomar pedido
            3) Ver pedidos
            4) Cancelar pedido
            5) Entregar Pedido
            6) Reporte
            7) Pizza más vendida
            8) Salir
            `);

        switch (opcion) {
            case "1":
                alert(pizzeriaApp.verMenu());
                break;
            case "2":
                const cliente= prompt("Nombre Cliente");
                const nombrePizza= prompt("Nombre Pizza");
                const tamanio= prompt("Tamaño Pizza");
                const cantidad= Number(prompt("Cantidad"));
                console.log(pizzeriaApp.tomarPedido(cliente,nombrePizza,tamanio,cantidad));
            case "3":
                alert(pizzeriaApp.verPedidos());
                break;
            case "4":
                const nroCancelado= Number(prompt("Nro Pedido"));
                alert(pizzeriaApp.cancelarPedido(nroCancelado));
                break;
            case "5":
                const nroEntregado= Number(prompt("Nro Pedido"));
                alert(pizzeriaApp.marcarEntregado(nroEntregado));
                break;
            case "6":
                alert(pizzeriaApp.reporte());
                break;
            case "7":
                alert(pizzeriaApp.pizzaMasVendida());
                break;

            default:
                break;
        }
    } while (opcion!="8");
}

//run();

//console.log(`Bienvenidos a ${pizzeriaApp.nombre}`);
//console.log(`Tenemos ${pizzeriaApp.menu.length} pizzas en el menú`);
//console.log("buscando_>>",pizzeriaApp.buscarPizza("muzzarella"));

//console.log(pizzeriaApp.agregarPizza("chilena",5500,["F","XG"]));

//console.log(`Tenemos ${pizzeriaApp.menu.length} pizzas en el menú`);
console.log(`${pizzeriaApp.tomarPedido("Jose","Pepperoni","XG",1)} `);
console.log(`${pizzeriaApp.tomarPedido("Pablo","Muzzarella","F",3)} `);
console.log(`${pizzeriaApp.tomarPedido("Rosa","Muzzarella","P",2)} `);
console.log(`${pizzeriaApp.tomarPedido("Ester","Muzzarella","M",2)} `);
console.log(`${pizzeriaApp.tomarPedido("Luisa","Napolitana","XG",2)} `);
console.log(`${pizzeriaApp.tomarPedido("Luis","Napolitana","XG",5)} `);

//console.log(pizzeriaApp.verPedidos());
//console.log(pizzeriaApp.cancelarPedido(3));
//console.log(pizzeriaApp.verPedidos());
//console.log(pizzeriaApp.marcarEntregado(1));
//console.log(pizzeriaApp.verPedidos());
//console.log(pizzeriaApp.reporte());
console.log(pizzeriaApp.pizzaMasVendida());