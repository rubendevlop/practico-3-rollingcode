let texto = prompt("Escribe una frase");

function diferenciar(texto){
    if(texto === texto.toLowerCase()){
        alert("Esta todo en minuscula");
    } else if(texto === texto.toUpperCase()){
        alert("Esta todo en mayuscula")
    }
    else{
        alert("Es una combinacion")
    }
}
diferenciar(texto);