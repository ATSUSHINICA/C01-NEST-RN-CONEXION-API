## Qué he aprendido

He aprendido cómo funciona una petición HTTP en NestJS y la relación entre el Controller y el Service.

## Respuesta a la pregunta de comprensión

La petición `GET /pizzas` llega al `PizzasController`, que utiliza el `PizzasService` mediante inyección de dependencias para obtener las pizzas y devolverlas como respuesta.

## Qué he modificado

He añadido una tercera pizza al array del `PizzasService`, con su nombre, emoji, identificador y precio.

## Resultado

Al realizar una petición `GET /pizzas`, ahora se muestran las tres pizzas correctamente, manteniendo la funcionalidad original del ejemplo.