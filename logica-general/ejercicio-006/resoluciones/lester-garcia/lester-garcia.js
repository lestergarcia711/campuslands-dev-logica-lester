let autos = [
    "Bugatti Chiron",
    "Koenigsegg Jesko",
    "Rimac Nevera",
    "Pagani Huayra",
    "McLaren Speedtail"
];

let autoBuscado = "Rimac Nevera";

if (autos.includes(autoBuscado)) {
    console.log("Auto encontrado en el inventario.");
    console.log("Modelo:", autoBuscado);
} else {
    console.log("El auto no se encuentra en el inventario.");
}