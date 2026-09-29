# EJERCICIO 03 - Busca mascota

## Qué he aprendido
He aprendido a buscar un elemento concreto de una lista usando un parámetro en la ruta (como `/mascotas/2`). También he aprendido a usar el decorador `@Param` para coger ese ID en el controlador y a usar `.find()` en el servicio para buscar la mascota.

## Respuesta a la pregunta de comprensión
**¿Por qué convertimos id con Number(id)?**
Porque todo lo que entra por la URL llega como texto (`string`). Como en nuestro array del servicio los IDs son números, hay que pasarlo a número con `Number(id)` para que la comparación dentro del `.find()` funcione bien.

## Qué he modificado
- **`mascotas.service.ts`**: He puesto el array con la lista de mascotas y he creado la función `findOne` para que busque la mascota por su ID. También he añadido una mascota nueva para hacer pruebas.
- **`mascotas.controller.ts`**: He añadido `@Get(':id')`, he cogido el parámetro con `@Param('id')` y se lo he mandado al servicio convertido con `Number(id)`.

## Resultado
Al hacer la petición `GET /mascotas/2` en el navegador o en la herramienta de pruebas, el servidor me devuelve el JSON de la mascota número 2:

```json
{
  "id": 2,
  "nombre": "Gato",
  "especie": "Felino"
}