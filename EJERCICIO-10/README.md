# EJERCICIO 10 · ESCRITURA (Likes)

## Qué he aprendido
* **Peticiones de modificación parcial (`PATCH`)**: Aprendí a utilizar el método HTTP `PATCH` en React Native especificando `{ method: 'PATCH' }` en las opciones de la función `fetch()`.
* **Manejo de endpoints con `@Patch` en NestJS**: Aprendí a declarar rutas de modificación parcial en el controlador usando el decorador `@Patch(':id/like')`.
* **Persistencia temporal en memoria**: Comprendí cómo modificar propiedades de un elemento guardado en un array local del Service y cómo el frontend actualiza su interfaz al recibir la respuesta actualizada del servidor.
* **Recorrido Full Stack de escritura**: Experimenté el flujo completo: Acción en la interfaz (botón "❤️ Me gusta") ➔ Petición `PATCH` ➔ Controller (`@Patch`) ➔ Service (incrementa likes en el array) ➔ Devuelve JSON con el objeto actualizado ➔ React Native actualiza la pantalla.

---

## Respuesta a la pregunta de comprensión

**¿Por qué los likes vuelven al valor inicial cuando reiniciamos NestJS?**
> **Respuesta:** Porque cumple una responsabilidad concreta dentro del flujo que acabamos de construir. Los datos están almacenados en la memoria RAM dentro de un arreglo temporal en el Service (`mascotas.service.ts`). Como aún no estamos usando una base de datos persistente, la información modificada existe solo mientras el proceso del servidor backend de NestJS permanezca en ejecución. Al reiniciar el servidor, la memoria se limpia y el arreglo se vuelve a inicializar con sus valores por defecto.

---

## Qué he modificado

1. **`backend/src/mascotas/mascotas.service.ts`**:
   * Se creó el arreglo de mascotas con sus contadores de `likes` iniciales.
   * Se implementó la función `darLike(id: number)` para buscar la mascota por ID e incrementar en 1 su propiedad `likes`.

2. **`backend/src/mascotas/mascotas.controller.ts`**:
   * Se añadió el endpoint `@Patch(':id/like')`.
   * Se utilizó `@Param('id') id: string` para recibir la ID, enviando `Number(id)` al método `darLike` del servicio.

3. **`frontend/App.tsx`**:
   * Se creó la función `darLike` que realiza el `fetch` con la opción `{ method: 'PATCH' }` hacia `API_URL + '/mascotas/1/like'`.
   * Se procesó la respuesta JSON recibida (`await respuesta.json()`) y se actualizó el estado local con la nueva cifra de likes devuelta por el servidor (`setLikes(mascota.likes)`).
   * Se vinculó la función al botón `❤️ Me gusta` mediante la propiedad `onPress`.

---

## Resultado

1. Al pulsar el botón **❤️ Me gusta** en la aplicación móvil, React Native ejecuta una petición `PATCH` a `http://TU_IP:3000/mascotas/1/like`.
2. NestJS captura la petición, ejecuta la lógica del servicio incrementando en +1 el contador del array y devuelve el objeto JSON de la mascota actualizada.
3. La app en React Native recibe la respuesta y actualiza la cifra mostrada en la interfaz inmediatamente:
   * **Visualización inicial:** `❤️ 14 likes`
   * **Visualización tras pulsar el botón:** `❤️ 15 likes`