# C01 · NEST + RN

## Qué he aprendido
* **Peticiones HTTP con `fetch` en React Native**: Aprendí a conectar una aplicación móvil con una API de NestJS usando el método asíncrono `fetch` para realizar peticiones `GET`.
* **Manejo de Estado (`useState`)**: Aprendí a almacenar la respuesta recibida (`{ texto: "..." }`) y el estado de la conexión (`conectado ✓` / `desconectado`) para actualizar la interfaz dinámicamente.
* **Componentes visuales y maquetación**: Utilicé `SafeAreaView` de `react-native-safe-area-context` para evitar solapamientos con la parte superior de la pantalla y el componente `Pressable` para renderizar el botón principal de acción.

---

## Respuesta a la pregunta de comprensión

**¿Por qué `respuesta.json()` devuelve un objeto y no se puede comparar directamente con una cadena de texto (String)?**
> **Respuesta:** Porque `fetch` analiza el cuerpo de la respuesta HTTP enviada por NestJS y lo transforma automáticamente en un objeto de JavaScript. Al hacer la comparación `datos === '{"texto": "..."}'`, se compara una referencia de objeto con un string, lo cual siempre dará `false`. Para evaluar el mensaje correctamente es necesario acceder directamente a la propiedad del objeto devuelto, como por ejemplo `datos.texto === '¡Conexión conseguida! 🚀'`.

---

## Qué he modificado

- **`App.tsx`**:
  - Definí el estado local usando `useState` para guardar los datos recibidos del backend y el indicador de estado.
  - Implementé la función asíncrona `verificarConexion` para realizar la petición `GET` a `${API_URL}/mensaje`.
  - Diseñé la tarjeta visual (`card`) para renderizar dinámicamente la respuesta enviada por NestJS.
  - Maqueté el botón utilizando `Pressable` con el estilo e interfaz requeridos (`ACCIÓN PRINCIPAL`).

---

## Resultado

Al pulsar el botón **ACCIÓN PRINCIPAL**, la app en React Native se conecta al backend en NestJS en la ruta `GET /mensaje`, actualizando los componentes en pantalla:

* **Respuesta visual:**
  ```json
  {
    "texto": "¡Conexión conseguida! 🚀"
  }