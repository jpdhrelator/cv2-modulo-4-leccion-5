console.log("PI:",Math.PI);


console.log("round(4.6):",Math.round(4.6));
console.log("floor(4.9):",Math.floor(4.9));
console.log("ceil(4.2):",Math.ceil(4.2));
console.log("abs(-7):",Math.abs(-7));
console.log("pow(2,10):",Math.pow(2,10));
//2^10 -> 2x2x2x2x2x2x2x2x2x2 = 1024
console.log("max(2,10,6):",Math.max(2,10,6));
console.log("min(2,10,6):",Math.min(2,10,6));
console.log("random():",Math.random());


const dado = Math.floor(Math.random() * 6) + 1;
// random() da 0–0.99
// *6 da 0–5.99
// floor da 0–5
// +1 da 1–6
console.log("🎲 dado:", dado);