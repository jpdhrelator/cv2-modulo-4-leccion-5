const taza= {
    color:"negro",
    peso: 100,
    material:"loza",
    metodo(){
        console.log("metodo");
        
    },
    metodo2:()=>console.log("metodo 2")

};

console.log(typeof taza);
console.log(taza.color);
console.log(taza.peso);
console.log(taza.material);
taza.color="Rojo";
console.log(taza.color);

taza.metodo();
taza.metodo2();

taza["color"]="verde"
console.log(taza["color"]);

console.log(taza["metodo"]);
taza["metodo"]();