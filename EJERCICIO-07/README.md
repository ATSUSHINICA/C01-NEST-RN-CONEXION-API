# EJERCICIO 07 · CONEXIÓN (Carga automática)

## Qué he aprendido
* **Ciclo de vida y Hook `useEffect`**: Aprendí a utilizar `useEffect` para ejecutar efectos secundarios al montar un componente, permitiendo que la aplicación realice peticiones HTTP de forma automática al abrir o cargar una pantalla.
* **Array de dependencias vacío (`[]`)**: Comprendí que pasar un array de dependencias vacío a `useEffect` garantiza que la función interna (`cargarMensaje()`) solo se ejecute una única vez tras el renderizado inicial de la interfaz.
* **Carga inicial y recarga manual**: Implementé un flujo de carga donde la información se obtiene automáticamente al inicio y, adicionalmente, se mantiene un botón "Recargar" para refrescar los datos manualmente a petición del usuario.

---

## Respuesta a la pregunta de comprensión

**¿Qué diferencia hay entre llamar `cargarMensaje` desde un botón y desde `useEffect`?**
> **Respuesta:** Porque cumple una responsabilidad concreta dentro del flujo que acabamos de construir. Al llamar a `cargarMensaje` desde un botón, la petición HTTP solo se ejecuta cuando el usuario realiza una acción explícita (interacción/pulsación). En cambio, al llamarla desde `useEffect` con un array de dependencias vacío (`[]`), la petición se dispara automáticamente en el momento en que la pantalla/componente aparece montada por primera vez en la interfaz.

---

## Qué he modificado

1. **`backend/src/mensaje/mensaje.controller.ts`**:
   * Se configuró la ruta `@Get()` en el controlador `/mensaje` para devolver el objeto JSON: `{ texto: 'Backend disponible' }`.

2. **`frontend/App.tsx`**:
   * Se integró el Hook `useEffect` para disparar automáticamente la función asíncrona `cargarMensaje()` cuando el componente se monta por primera vez.
   * Se configuró el estado inicial del mensaje como `'Cargando…'` para indicar al usuario que los datos se están recuperando en segundo plano.
   * Se conservó la función `cargarMensaje` asociada a un botón "Recargar" (o acción principal) para permitir refrescar la información en cualquier momento.

---

## Resultado

* **Al abrir la pantalla (Carga inicial automática):**
  1. Estado inicial del componente: Muestra el mensaje **"Cargando…"**.
  2. `useEffect` ejecuta automáticamente `cargarMensaje()` enviando un `GET` a NestJS.
  3. La interfaz se actualiza sola al recibir la respuesta: **`🟢 Backend disponible`**.

* **Al pulsar el botón Recargar:**
  1. Se vuelve a invocar `cargarMensaje()`.
  2. Se realiza una nueva petición HTTP y se refresca el estado en pantalla con la respuesta del servidor.