# Plantilla de solucion

## Analisis

- Entrada:
  - Nombre del jugador.
  - Edad del jugador.
  - Ranking del jugador.

- Proceso:
  - Leer los datos del jugador.
  - Verificar si la edad es mayor o igual a 16 años.
  - Verificar si el ranking es mayor o igual a 1500 puntos.
  - Si ambas condiciones se cumplen, indicar que clasifica al torneo.
  - En caso contrario, indicar que no clasifica.

- Salida:
  - Un mensaje indicando si el jugador clasifica o no al torneo.

## Reglas identificadas

1. El jugador debe tener al menos 16 años.
2. El jugador debe tener un ranking mínimo de 1500 puntos.
3. Solo si ambas condiciones se cumplen, el jugador clasifica al torneo.

## Pruebas

### Caso normal

Entrada:

Nombre: Carlos

Edad: 18

Ranking: 1725

Resultado esperado:

Clasifica al torneo.

### Caso borde

Entrada:

Nombre: Ana

Edad: 16

Ranking: 1500

Resultado esperado:

Clasifica al torneo.

## Explicacion final

La solucion funciona porque recibe los datos del jugador, evalua las dos reglas del torneo mediante una condicion logica (AND) y genera un resultado claro. Si el jugador cumple simultaneamente con la edad minima y el ranking requerido, clasifica al torneo; de lo contrario, no clasifica. Esto garantiza que la decision siempre sea consistente con las reglas establecidas.