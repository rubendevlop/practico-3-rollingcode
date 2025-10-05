let ciudades = [];
let ciudad = "";

do{
    ciudad = prompt("Agrega una ciudad");
    if(ciudad !== null){
        let agregar = ciudades.push(ciudad.toLowerCase());
    };
} while(ciudad !== null)

    document.getElementById("arreglo").innerHTML = `Elemento: ${ciudades.join(`<br> Elemento: `)}`

console.log(ciudades.length)

document.getElementById("resultado").textContent =
`Elemento 1er posicion: ${ciudades[0]}
Elemento 3er posicion: ${ciudades[2]}
Elemento ultima posicion: ${ciudades[ciudades.length -1]}`

let paris = ciudades.push("paris");
document.getElementById("resultado-2").textContent = 
`Elemento ultima posicion: ${ciudades[ciudades.length -1]}`;
console.log("Nuevo array: " + ciudades.join(`, `));
let = ciudades.splice(1, 1, "barcelona");
console.log("Nuevo array: " + ciudades.join(`, `));