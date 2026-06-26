const producto = {  nombre: "Notebook",
                    precio: 599000,
                    stock: 12 
                };

console.log("keys:", Object.keys(producto));
console.log("valores:", Object.values(producto));
console.log("entries:", Object.entries(producto));


for (const key in producto) {    
    console.log("key:",key);    
}

Object.entries(producto).forEach(([k,v])=>{
    console.log("key",k,"value:",v);    
});



