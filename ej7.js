let num = Number(prompt("Ingresa el número para hacer la tabla"));

if (!isNaN(num) && !null) {
  for (let i = 1; i <= 10; i++) {
    let multiplicar = `${num} x ${i} = ${num * i}`;
    alert(multiplicar);
  }
} else {
  alert("Valor incorrecto. Debes ingresar un número.");
}
