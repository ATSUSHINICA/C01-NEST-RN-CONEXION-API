# EJERCICIO 05 · CONEXIÓN (Mi primera conexión)

## Qué he aprendido
* **Comunicación Full Stack con `fetch`**: Aprendí a realizar peticiones HTTP asíncronas (`fetch` + `await`) desde una aplicación móvil en React Native hacia un backend desarrollado con NestJS.
* **Procesamiento de datos JSON**: Aprendí a convertir la respuesta HTTP recibida en formato JSON (`await respuesta.json()`) para consumirla en la aplicación.
* **Configuración de red y direcciones IP**: Comprendí por qué el dispositivo móvil (físico o emulador) no puede referenciar al ordenador mediante `localhost` y la importancia de configurar la dirección IP local de la red para establecer la comunicación.

---

## Respuesta a la pregunta de comprensión

**¿Por qué el móvil necesita conocer la IP del equipo donde se ejecuta NestJS?**
> **Respuesta:** Porque cumple una responsabilidad concreta dentro del flujo que acabamos de construir. En el contexto del dispositivo móvil (o emulador), la palabra clave `localhost` o la IP `127.0.0.1` hace referencia al propio teléfono y no a tu ordenador. Para que el móvil pueda enviar peticiones HTTP y comunicarse a través de la red local con el servidor NestJS que corre en tu equipo, es imprescindible especificar la dirección IP local de tu ordenador.

---

## Qué he modificado

1. **`backend/src/mensaje/mensaje.controller.ts`**:
   * Se creó el controlador de NestJS anotado con `@Controller('mensaje')` y la ruta `@Get()` que responde al endpoint `/mensaje` devolviendo el JSON `{ texto: '¡Conexión conseguida! 🚀' }`.

2. **`frontend/App.tsx`**:
   * Se configuró la constante `API_URL` utilizando la IP local del ordenador en lugar de `localhost` (ejemplo: `http://192.168.x.x:3000`).
   * Se creó la función asíncrona `cargarMensaje` que ejecuta la petición HTTP usando `await fetch(API_URL + '/mensaje')` y extrae los datos con `.json()`.
   * Se enlazó la ejecución de la petición a la acción principal del usuario (botón/pressable).

---

## Resultado

Al interactuar con la aplicación en React Native:
* **Petición enviada:** `GET http://TU_IP:3000/mensaje`
* **Respuesta recibida desde NestJS:**
  ```json
  {
    "texto": "¡Conexión conseguida! 🚀"
  }