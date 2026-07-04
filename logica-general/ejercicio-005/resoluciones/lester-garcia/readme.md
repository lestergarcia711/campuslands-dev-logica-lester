# Plantilla de solucion

## Analisis

- Entrada:
  - Nombre del cliente.
  - Tipo de servicio solicitado.

- Proceso:
  - Leer el servicio solicitado.
  - Comparar el tipo de servicio con las reglas de prioridad.
  - Asignar una prioridad (Alta, Media o Baja).
  - Mostrar el nivel de prioridad correspondiente.

- Salida:
  - Un mensaje indicando la prioridad del servicio.

## Reglas identificadas

1. Si el servicio es de frenos o motor, la prioridad es Alta.
2. Si el servicio es de mantenimiento preventivo, la prioridad es Media.
3. Si el servicio es cambio de aceite o revisión general, la prioridad es Baja.

## Pruebas

### Caso normal

Entrada:

Cliente: Luis

Servicio: Frenos

Resultado esperado:

Prioridad: Alta

### Caso borde

Entrada:

Cliente: Ana

Servicio: Cambio de aceite

Resultado esperado:

Prioridad: Baja

## Explicacion final

La solución funciona porque recibe el tipo de servicio solicitado y lo compara con las reglas definidas utilizando estructuras condicionales. Dependiendo del servicio, asigna un nivel de prioridad (Alta, Media o Baja), permitiendo organizar la atención de los vehículos de manera clara y verificable según la urgencia de cada caso.