let num = parseInt(prompt("Ingresa numero entero"));

function parOInpar(num){
    let diferenciar = num % 2;
    if (diferenciar === 0){
        console.log(`El numero ${num} es par`)
    } else{
        console.log(`El numero ${num} es inpar`)
    }
}

console.log(parOInpar(num))