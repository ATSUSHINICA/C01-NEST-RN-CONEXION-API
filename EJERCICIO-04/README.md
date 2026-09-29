# EJERCICIO 04 - Filtra videojuegos

## Qué he aprendido
He aprendido a utilizar parámetros de consulta (**Query Parameters**) en NestJS mediante el decorador `@Query('genero')`. A diferencia de los Path Parameters que sirven para buscar un único elemento concreto por su ID, los Query Params permiten aplicar criterios opcionales como filtros (por ejemplo `/juegos?genero=aventura`). También he aprendido a usar el método `.filter()` de JavaScript en el servicio para filtrar la lista según el parámetro recibido.

## Respuesta a la pregunta de comprensión
**¿Cuándo usarías `/juegos/3` y cuándo `/juegos?genero=aventura`?**
Usaría `/juegos/3` (Path Parameter) cuando quiero recuperar un **recurso único y específico** identificado por su ID (un juego en concreto)[cite: 1]. Usaría `/juegos?genero=aventura` (Query Parameter) cuando quiero consultar la lista general de juegos pero **filtrando, buscando o limitando los resultados** según una condición u opción concreta (como el género)[cite: 1].

## Qué he modificado
- **`juegos.service.ts`**: He creado un array con cuatro videojuegos (con `id`, `titulo` y `genero`) y he configurado la función `findAll(genero?: string)` para que, si recibe un género, devuelva los juegos filtrados con `.filter()`, y si no recibe ninguno, devuelva la lista completa.
- **`juegos.controller.ts`**: He definido la ruta `@Get()` utilizando `@Query('genero') genero?: string` para capturar el parámetro opcional de la URL y pasárselo al servicio.

## Resultado
- Al consultar sin filtro (`GET /juegos`), la API devuelve la lista completa con los 4 videojuegos.
- Al consultar con filtro de género (`GET /juegos?genero=aventura`), la API devuelve únicamente los videojuegos pertenecientes a ese género:

```json
[
  {
    "id": 1,
    "titulo": "Zelda: Breath of the Wild",
    "genero": "aventura"
  }
]