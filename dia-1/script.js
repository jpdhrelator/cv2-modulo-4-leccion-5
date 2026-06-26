const NRO_SECRETO= Math.floor(Math.random()*100)+1;
console.log(NRO_SECRETO);

let intentos= 0;
let intento;
const LIMITE_INTENTOS=Math.floor(Math.random()*5)+1;

do {

    intento = prompt(`Adivina el numero (1 y 100) en ${LIMITE_INTENTOS} intentos`)
    intentos++;

    if (intento < NRO_SECRETO) {
        alert("Muy bajo ⬆️");        
    }else if (intento > NRO_SECRETO)  {
        alert("Muy alto ⬇️");        
    }else{

        alert(`¡Correcto! 🎉 Lo lograste en ${intentos} intentos`);
        
    }

    if(intentos===LIMITE_INTENTOS){
        alert(`❌ llegaste el limite de intentos (${LIMITE_INTENTOS}), mejor suerte para la otra`);
        break;
    } 

} while (intento!=NRO_SECRETO);