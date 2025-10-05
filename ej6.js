let a = Number(prompt("Ingresa un valor a"));
let b = Number(prompt("Ingresa un valor b"));

function calcularPerimetro(a,b){
    let perimetro = 2*(a+b);
    return perimetro;
}

alert(`El perímetro de tu rectángulo es: ${calcularPerimetro(a, b)}`);
