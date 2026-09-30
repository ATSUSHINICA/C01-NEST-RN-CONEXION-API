# EJERCICIO 08 · INTEGRACIÓN (Menú del restaurante)

## Qué he aprendido
* **Renderizado de listas con `FlatList`**: Aprendí a utilizar el componente nativo `FlatList` de React Native para renderizar de manera eficiente un array de objetos recuperados desde la API de NestJS.
* **Propiedades clave de `FlatList`**:
  * `data`: Le pasa la colección de elementos guardada en el estado (`productos`).
  * `keyExtractor`: Proporciona una clave única e identificable para cada elemento (`String(item.id)`).
  * `renderItem`: Define la estructura visual y tarjetas que representan a cada producto (`emoji`, `nombre`, `precio`).
* **Integración Full Stack con colecciones**: Comprendí cómo un array devuelto por un Service en NestJS se recibe mediante `fetch`, se guarda en el estado local con `useState` y finalmente se transforma en tarjetas visuales iteradas dinámicamente en React Native.

---

## Respuesta a la pregunta de comprensión

**¿Qué relación existe entre el array del Service y `data={productos}`?**
> **Respuesta:** Porque cumple una responsabilidad concreta dentro del flujo que acabamos de construir. El array devuelto por el Service en NestJS viaja por HTTP en formato JSON, es obtenido por la app mediante `fetch`, y almacenado en el estado `productos` con `setProductos()`. Luego, la propiedad `data={productos}` de `FlatList` recibe este estado para iterar y renderizar cada elemento del array en la interfaz gráfica del móvil.

---

## Qué he modificado

1. **`backend/src/productos/productos.service.ts`**:
   * Se creó el servicio que gestiona el array de productos del menú y se añadió un **cuarto producto** para cumplir los requisitos de la modificación solicitada.
   ```typescript
   // Ejemplo de productos devueltos por el Service
   [
     { id: 1, nombre: 'Hamburguesa', precio: 8.5, emoji: '🍔' },
     { id: 2, nombre: 'Pizza', precio: 9.0, emoji: '🍕' },
     { id: 3, nombre: 'Tacos', precio: 7.5, emoji: '🌮' },
     { id: 4, nombre: 'Ramen', precio: 10.0, emoji: '🍜' }, // Añadido
   ]