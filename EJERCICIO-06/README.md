# EJERCICIO 06 · CONEXIÓN (Estado de conexión)

## Qué he aprendido
* **Gestión de estado en React Native (`useState`)**: Aprendí a utilizar el Hook `useState` para guardar información que puede cambiar durante el uso de la aplicación (como la respuesta del backend) y que requiere re-renderizar la interfaz al actualizarse.
* **Flujo completo Full Stack**: Comprendí el flujo extremo a extremo: Acción en React Native (`fetch`) ➔ Petición HTTP (`GET /mensaje`) ➔ Controlador de NestJS ➔ Respuesta en formato JSON ➔ `setMensaje()` ➔ Actualización dinámica de la interfaz en React Native.
* **Diferencia entre variable local y Hook de Estado**: Entendí que modificar una variable común no provoca que React repinte la pantalla, mientras que llamar a la función actualizadora del estado (`setMensaje`) le indica a React que vuelva a renderizar la interfaz con los nuevos datos.

---

## Respuesta a la pregunta de comprensión

**¿Qué aporta `useState` frente a una variable normal?**
> **Respuesta:** Una variable normal puede cambiar su valor en memoria, pero React no se entera de ese cambio y, por lo tanto, no actualiza la pantalla. `useState` nos proporciona una función actualizadora (como `setMensaje`) que, al ser ejecutada con un nuevo valor, notifica a React para que vuelva a renderizar el componente y muestre los datos actualizados en la interfaz de la aplicación.

---

## Qué he modificado

1. **`backend/src/mensaje/mensaje.controller.ts`**:
   * Se creó el controlador con la ruta `@Get()` que responde en el endpoint `/mensaje` devolviendo el objeto JSON: `{ texto: '¡Conexión conseguida!' }`.

2. **`frontend/App.tsx`**:
   * Se declaró el estado inicial con el mensaje por defecto:
     ```typescript
     const [mensaje, setMensaje] = useState('🔴 Sin conectar');
     ```
   * Se implementó la función `cargarMensaje` para realizar la petición asíncrona con `fetch(API_URL + '/mensaje')`, extraer el JSON y llamar a `setMensaje('🟢 ' + datos.texto)` para actualizar la interfaz.
   * Se añadieron las modificaciones requeridas para mostrar `🔴` antes de la conexión y `🟢` cuando la respuesta llega del backend NestJS.

---

## Resultado

* **Antes de pulsar el botón / realizar la petición:**
  La pantalla muestra el estado inicial configurado en el `useState`:
  `🔴 Sin conectar`

* **Al recibir la respuesta de NestJS:**
  La aplicación recibe el JSON `{ texto: '¡Conexión conseguida!' }`, ejecuta la función `setMensaje()` y React actualiza la pantalla automáticamente a:
  `🟢 ¡Conexión conseguida!`