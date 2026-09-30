# EJERCICIO 11 · ESCRITURA (Mini tienda)

## Qué he aprendido
* **Método HTTP POST y envío de datos**: Aprendí a utilizar el método `POST` mediante `fetch` en React Native para enviar objetos con datos estructurados (como `nombre` y `precio`) al backend.
* **Transformación de datos con `JSON.stringify`**: Comprendí la necesidad de establecer la cabecera `'Content-Type': 'application/json'` y serializar los datos ingresados en la interfaz con `JSON.stringify()` antes de enviarlos por la red.
* **Captura de payload con `@Body()` en NestJS**: Aprendí cómo el decorador `@Body()` en los controladores de NestJS intercepta, extrae y deserializa automáticamente el cuerpo JSON de las peticiones entrantes para enviarlo al Service.
* **Persistencia temporal en memoria**: Comprendí cómo el Service añade nuevos recursos a su array interno mediante mutación en memoria (`.push()`), manteniendo la lista actualizada durante el tiempo de ejecución del backend.

---

## Respuesta a la pregunta de comprensión

**¿Qué recorrido realiza el objeto hasta llegar a `@Body()`?**
> **Respuesta:** Porque cumple una responsabilidad concreta dentro del flujo que acabamos de construir. Los datos capturados en los estados de React Native se convierten a cadena JSON con `JSON.stringify()` y se envían en el cuerpo (`body`) de una petición HTTP `POST`. La petición llega a NestJS, donde el Controller recibe el objeto del cuerpo HTTP y lo inyecta mediante el decorador `@Body()` para enviarlo al Service.

---

## Qué he modificado

1. **`backend/src/productos/productos.controller.ts`**:
   * Se configuró la ruta `@Post()` para interceptar peticiones entrantes y capturar el objeto enviado desde el cliente mediante `@Body() producto: { nombre: string; precio: number }`.

2. **`backend/src/productos/productos.service.ts`**:
   * Se implementó el método `crear(producto)` que genera un `id` único para el nuevo recurso y lo agrega al array temporal de productos mediante un `.push()`.

3. **`frontend/App.tsx`**:
   * Se añadieron campos de entrada de texto (`TextInput`) vinculados a estados locales (`nombre`, `precio`) para capturar la información ingresada por el usuario.
   * Se creó la función asíncrona `agregarProducto()` que realiza la petición `POST` con `method: 'POST'` y re-ejecuta la consulta de la lista (`GET`) para reflejar instantáneamente el nuevo producto en el `FlatList`.

---

## Resultado

* **Creación de un nuevo producto desde la app:**
  1. El usuario introduce el nombre *"Teclado"* y el precio *"25"* en los campos correspondientes.
  2. Al pulsar el botón **AÑADIR**, React Native envía la petición `POST` hacia `/productos`.
  3. NestJS procesa la petición con `@Body()`, actualiza el array del `ProductosService` y responde con el producto creado.
  4. La interfaz móvil se actualiza dinámicamente mostrando el nuevo elemento en la lista.