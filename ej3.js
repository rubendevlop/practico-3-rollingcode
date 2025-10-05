let tirarDados;
let suma=0;
let arraySuma = [];
do{
    tirarDados = confirm("tirar dados?")
    if(tirarDados === true){
        let numero = Math.floor(Math.random() * 6) + 1;
        console.log(`El numero de dados es: ${numero}`);
        arraySuma.push(numero);
        suma += numero;
        
    }
    
} while(tirarDados === true);

console.log("La suma es " + suma + " y el array es: " + arraySuma.join(", "));
