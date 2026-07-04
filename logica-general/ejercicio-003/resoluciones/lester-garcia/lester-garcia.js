let nombre = "Carlos";
let edad = 18;
let ranking = 1725;

let resultado = "";

if (edad >= 16 && ranking >= 1500) {
    resultado = "Clasifica al torneo.";
} else {
    resultado = "No clasifica al torneo.";
}

console.log("Jugador:", nombre);
console.log("Edad:", edad);
console.log("Ranking:", ranking);
console.log("Resultado:", resultado);