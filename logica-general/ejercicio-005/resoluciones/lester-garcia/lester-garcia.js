let cliente = "Luis";
let servicio = "Frenos";

let prioridad = "";

if (servicio === "Frenos" || servicio === "Motor") {
    prioridad = "Alta";
} else if (servicio === "Mantenimiento") {
    prioridad = "Media";
} else if (servicio === "Cambio de aceite" || servicio === "Revision general") {
    prioridad = "Baja";
} else {
    prioridad = "No definida";
}

console.log("Cliente:", cliente);
console.log("Servicio:", servicio);
console.log("Prioridad:", prioridad);