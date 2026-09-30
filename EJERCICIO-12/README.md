# EJERCICIO 12 · FINAL (Creature Lab)

## Qué he aprendido
* **Integración Full Stack Completa**: Aprendí a integrar en una única miniapp todas las piezas y patrones trabajados previamente (peticiones `GET` de colección, `GET` con Path Params y `PATCH` de modificación parcial) conectando React Native con NestJS.
* **Gestión de estado global y vistas dinámicas**: Integré los Hooks `useState` y `useEffect` en React Native para cargar automáticamente el listado al iniciar la app, seleccionar una criatura específica y actualizar sus likes en tiempo real tras la respuesta del backend.
* **Listado e interacción con `FlatList`**: Aprendí a renderizar datos devueltos por la API en un `FlatList` permitiendo que cada elemento ejecute acciones dinámicas al interactuar con la interfaz móvil.
* **Flujo completo de arquitectura Controller-Service**: Consolidé el modelo mental completo: Acción del usuario en la app ➔ `fetch()` ➔ Controlador (`@Get`, `@Patch`) ➔ Servicio (Array en memoria) ➔ Respuesta JSON ➔ Renderizado en pantalla.

---

## Respuesta a la pregunta de comprensión

**¿Podrías explicar el viaje completo de un dato sin mirar el código?**
> **Respuesta:** Porque cumple una responsabilidad concreta dentro del flujo que acabamos de construir. El viaje comienza cuando el usuario realiza una acción en React Native (como pulsar un botón o cargar la pantalla), lo que dispara una petición HTTP (`GET` o `PATCH`) mediante `fetch()`. La petición viaja por la red e impacta en el controlador (`Controller`) de NestJS, el cual intercepta los parámetros o el cuerpo del mensaje y delega la lógica al servicio (`Service`). El servicio busca o modifica los datos en su array temporal y devuelve una respuesta estructurada en formato JSON, permitiendo que React Native reciba los datos, actualice el estado local (`useState`) y vuelva a renderizar la interfaz para el usuario.

---

## Qué he modificado

1. **`backend/src/criaturas/criaturas.service.ts`**:
   * Se definió el array temporal con los objetos de criaturas (`id`, `nombre`, `nivel`, `poder`, `likes`, `emoji`).
   * Se implementaron los métodos `findAll()`, `findOne(id: number)` y `darLike(id: number)` para manejar las búsquedas e incrementar el contador de likes en memoria.

2. **`backend/src/criaturas/criaturas.controller.ts`**:
   * Se expusieron los endpoints de la API:
     * `@Get()` para obtener el listado completo (`findAll`).
     * `@Get(':id')` para buscar una criatura por ID (`findOne`).
     * `@Patch(':id/like')` para incrementar los likes de una criatura específica (`darLike`).

3. **`frontend/App.tsx`**:
   * Se integraron los estados locales para gestionar el listado de criaturas y la criatura seleccionada.
   * Se utilizó `useEffect` para cargar la lista completa automáticamente al iniciar.
   * Se maquetó la interfaz combinando `FlatList` para renderizar el listado y un panel de detalle con el botón `❤️ Me gusta` que ejecuta la petición `PATCH` y refresca los datos.

---

## Resultado

* **Carga automática inicial:** Al abrir la miniapp, `useEffect` realiza un `GET /criaturas` y `FlatList` renderiza las criaturas disponibles (*Draco* 🐲, *Foxy* 🦊, *Panda-X* 🐼).
* **Selección por ID:** Al pulsar sobre una criatura, se consulta `GET /criaturas/:id` y se despliega su ficha con sus atributos (*nivel*, *poder*, *likes*).
* **Interacción PATCH:** Al presionar el botón `❤️ Me gusta` en la ficha, se envía la petición `PATCH /criaturas/:id/like` a NestJS, el servicio incrementa la cifra en el array y la pantalla del móvil actualiza inmediatamente la cantidad de likes sin recargar toda la app.