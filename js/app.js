const nombre = "Juan esteban";
const edad = 19;
const ciudad = "Cartagena";

console.log(`Hi, me llamo ${nombre}, tengo ${edad}, años y vivo en ${ciudad}.`);

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof ciudad);

const añoActual = 2026;
const añoNacimiento = añoActual - edad;

console.log("Año aproximado de nacimiento", añoNacimiento);


const edadTexto = "19";

console.log(edadTexto + 1);
console.log(Number(edadTexto) + 1);

/*
los resultados cambian ya que al momento de sumar un "1" al 19, js concatena el texto con el numero, por lo que el resultado es 191.
Al momento de convertir el texto a numero, js realiza la suma correctamente, por lo que el resultado es 20.
*/