# Plantilla de solucion

## Analisis

- Entrada:
  - Lista de autos hiperdeportivos.
  - Nombre del auto que se desea buscar.

- Proceso:
  - Leer la lista de autos.
  - Leer el nombre del auto a buscar.
  - Verificar si el auto existe dentro de la lista utilizando una búsqueda.
  - Mostrar el resultado de la búsqueda.

- Salida:
  - Un mensaje indicando si el auto fue encontrado o no.

## Reglas identificadas

1. La búsqueda se realiza sobre la lista de autos disponibles.
2. Si el auto existe en la lista, se informa que fue encontrado.
3. Si el auto no existe, se informa que no está en el inventario.

## Pruebas

### Caso normal

Entrada:

Lista:
- Bugatti Chiron
- Koenigsegg Jesko
- Rimac Nevera
- Pagani Huayra
- McLaren Speedtail

Auto buscado:

Rimac Nevera

Resultado esperado:

Auto encontrado en el inventario.

### Caso borde

Entrada:

Lista:
- Bugatti Chiron
- Koenigsegg Jesko
- Rimac Nevera
- Pagani Huayra
- McLaren Speedtail

Auto buscado:

Ferrari F80

Resultado esperado:

El auto no se encuentra en el inventario.

## Explicacion final

La solución funciona porque recibe una lista de autos hiperdeportivos y el nombre del modelo que se desea buscar. Mediante el método `includes()` verifica si el elemento existe dentro del arreglo. Si la búsqueda tiene éxito, informa que el auto fue encontrado; en caso contrario, indica que no está disponible en el inventario. Esto permite obtener un resultado claro, verificable y acorde con las reglas del problema.