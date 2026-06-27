const IVA= 0.19;
const formatearPesos=(monto)=>`$${monto.toLocaleString('es-CL')}`;
const aplicaIva= (monto)=> monto + (monto * IVA);
const factorTamanio={
    p: 0.3,
    m: 0.65,
    f: 0.85,
    xg:1.23
}
const capitalizarTexto= (texto)=>{
    if(!texto) return '';
    return `${texto.charAt(0).toUpperCase()}${texto.slice(1).toLowerCase()}`
}